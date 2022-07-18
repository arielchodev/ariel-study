import React from 'react';
// import useCommentsList from './hooks/useCommentsList';
import CommentsItem from './CommentsItem/CommentsItem';

export default function CommentsList() {
  //   const { listComments } = useCommentsList();

  return (
    <>
      <div className="comments_wrap">
        <CommentsItem />
      </div>
    </>
  );
}
