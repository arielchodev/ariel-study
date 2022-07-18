import { issueListApi } from '@/api/Issue';
import { useState, useEffect } from 'react';

const useIssueList = () => {
  const [list, setList] = useState();

  const getIssueList = async () => {
    // try {
    const resIssueList = await issueListApi();

    setList(resIssueList.data);
    // } catch (e) {
    //   throw e;
    // }
  };

  useEffect(() => {
    getIssueList();
  }, []);

  return { list };
};

export default useIssueList;
