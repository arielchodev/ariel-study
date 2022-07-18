import { commentsListApi } from '@/api/comments';
import { useState, useEffect } from 'react';

const useCommnetsList = () => {
  const [listComments, setList] = useState();

  const getCommnetsList = async () => {
    // try {
    const resCommnetsList = await commentsListApi();

    setList(resCommnetsList.data);
    // } catch (e) {
    //   throw e;
    // }
  };

  useEffect(() => {
    getCommnetsList();
  }, []);

  return { listComments };
};

export default useCommnetsList;
