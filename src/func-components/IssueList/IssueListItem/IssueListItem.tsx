import React from 'react';
import Link from 'next/link';
import useCommentsList from '../../CommentsList/hooks/useCommentsList';

export default function IssueListItem({ item }: any) {
  const { listComments } = useCommentsList();
  console.log('item', item);

  // const listFilterTest = listComments.filter(listComments => listComments.issueId === '1');
  console.log('listComments    ', listComments);

  return (
    <li className="vote_conts">
      <div>
        <div className="vote_conts_top">
          <span className="ico_issue">찬반투표</span>
          <div className="contents_box">
            <div className="topbanner_title">
              <p className="link_text1">{item.title}</p>
              <p className="link_text2">{item.description}</p>
            </div>
          </div>
        </div>
        <div className="vote_reply_wrap">
          <Link href="/comments">
            <a className="reply_all">의견 1개 모두보기</a>
          </Link>
          {listComments &&
            listComments
              .filter((commentId: any) => commentId.issueId === item.id)
              .map((itemA: any) => {
                return (
                  <a key={itemA.id} className="reply_comment_wrap">
                    <div className="reply_id">바다와구름</div>
                    <div className="reply_comment">{itemA.comment}</div>
                  </a>
                );
              })}
        </div>
      </div>
    </li>
  );
}
