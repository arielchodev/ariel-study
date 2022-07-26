import { issueListApi } from '@/api/Issue';
import { useState, useEffect } from 'react';

const useIssueList = () => {
  const [list, setList] = useState();

  const getIssueList = async () => {
    const resIssueList = await issueListApi();

    setList(resIssueList.data);
  };

  useEffect(() => {
    getIssueList();
  }, []);

  return { list };
};

export default useIssueList;
