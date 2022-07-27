import { callApi } from './config';

export const commentsListApi = () => {
  return callApi({
    url: '/comments',
    method: 'GET',
  });
};
