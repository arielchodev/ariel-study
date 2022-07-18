import { callApi } from './config';

export const commentsListApi = () => {
  return callApi({
    url: 'http://localhost:3001/comments',
    method: 'GET',
  });
};
