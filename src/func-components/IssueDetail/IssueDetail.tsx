import React from 'react';
import useIssueList from '../IssueList/hooks/useIssueList';
import { IssueResponseType, CommentsResponseType } from '@/types/issues';
import useIssueListItem from '../IssueList/hooks/useIssueListItem';

interface IssueDetailPropsType {
  issueId: number;
}

export default function IssueDetail({ issueId }: IssueDetailPropsType) {
  const { list } = useIssueList();
  const { listComment } = useIssueListItem(issueId);
  console.log('listComment   ', listComment);
  return (
    <div className="comments_wrap">
      <div className="comments_contents">
        {list &&
          list
            .filter(
              (commentsList: IssueResponseType) => commentsList.id === issueId,
            )
            .map((commentsList: IssueResponseType) => {
              return (
                <div className="talkview_head" key={commentsList.id}>
                  <h2 className="talk_mtitle">{commentsList.title}</h2>
                  <div className="talk_contents">
                    {commentsList.description}
                  </div>
                  <div className="vote">
                    <ul>
                      <li>
                        <dl id="VOTE_SNO_128">
                          <dd>
                            <span className="t_blue">
                              <b>{commentsList.vote.agree}</b>%
                            </span>
                          </dd>
                          <dd className="info3">
                            <span className="gBar">
                              <span className="gAction4"></span>
                              <span className="gAction2"></span>
                            </span>
                          </dd>
                          <dd>
                            <span className="t_red">
                              <b>{commentsList.vote.disagree}</b>%
                            </span>
                          </dd>
                        </dl>
                      </li>
                      <li className="btn">
                        <a className="btn_like">
                          <dl>
                            <dd className="btn_recomm">부활 찬성</dd>
                          </dl>
                        </a>
                        <a className="btn_like">
                          <dl>
                            <dd>부활 반대</dd>
                          </dl>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}

        <div className="opinionform_wrap">
          <div className="reply_contents">
            <dl className="textarea_cont">
              <dt>
                <textarea
                  id="CMT_CTNT"
                  name="CMT_CTNT"
                  placeholder="로그인을 해주세요. 정책에 따라 운영됩니다."
                ></textarea>
              </dt>
              <dd>
                <button id="BTN_CMT_CTNT">의견 등록하기</button>
              </dd>
            </dl>
          </div>
        </div>
        <div className="comment_wrap">
          <ul className="comment_list_wrap">
            {listComment &&
              listComment.map((commentsList: CommentsResponseType) => {
                return (
                  <li key={commentsList.id} className="comment_list">
                    <div className="list_id">{commentsList.id}</div>
                    <div className="list_comment">{commentsList.comment}</div>
                    <div className="list_day">{commentsList.date}</div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}
