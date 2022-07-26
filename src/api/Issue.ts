import { callApi } from './config';

export const issueListApi = () => {
  return callApi({
    url: '/issues',
    method: 'GET',
  });
};

export const recentCommentsApi = (id: number) => {
  return callApi({
    url: `/comments?issueId=${id}`,
    method: 'GET',
  });
};
