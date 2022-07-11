# Production image, copy all the files and run next

# Install dependencies only when needed
FROM 552501716673.dkr.ecr.ap-northeast-2.amazonaws.com/insterior/web-nodejs:14.15.0-alpine3.12 AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json yarn.lock ./
RUN npm install

# Rebuild the source code only when needed
FROM 552501716673.dkr.ecr.ap-northeast-2.amazonaws.com/insterior/web-nodejs:14.15.0-alpine3.12 AS builder
WORKDIR /app
ARG BUILD_STAGE=dev

COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build:${BUILD_STAGE} && npm install --production --ignore-scripts

# Production image, copy all the files and run next
FROM 552501716673.dkr.ecr.ap-northeast-2.amazonaws.com/insterior/web-nodejs:14.15.0-alpine3.12 AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

RUN npm i -g pm2@5.1.0

# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/ecosystem.config.js ./ecosystem.config.js
COPY --from=builder /app/start-entry.sh ./


USER nextjs

EXPOSE 3010

RUN ls -al -R

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1
ENTRYPOINT [ "./start-entry.sh" ]