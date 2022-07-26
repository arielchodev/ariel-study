import { commentsListApi } from '@/api/comments';
import { useState, useEffect } from 'react';

const useCommnetsList = () => {
  const [listComments, setList] = useState();

  const getCommnetsList = async () => {
    const resCommnetsList = await commentsListApi();

    setList(resCommnetsList.data);
  };

  useEffect(() => {
    getCommnetsList();
  }, []);

  return { listComments };
};

export default useCommnetsList;
