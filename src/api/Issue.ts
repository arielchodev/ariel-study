import { callApi } from './config';
//
export const issueListApi = () => {
  return callApi({
    url: 'http://localhost:3001/issues',
    method: 'GET',
  });
};
