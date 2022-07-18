import React from 'react';

export default function CommentsItem() {
  return (
    <div className="comments_contents">
      <div className="talkview_head">
        <h2 className="talk_mtitle">aaa</h2>
        <div className="talk_contents">
          윤석열 대통령의 부인 김건희 여사의 공식ㆍ비공식 일정이 늘면서
          제2부속실을 부활해야 한다는 목소리가 나오고 있습니다. 윤 대통령은 대선
          공약이었던 만큼 신중한 입장을 보이고 있습니다. 어떻게 생각하세요?
        </div>
        <div className="vote">
          <ul>
            <li>
              <dl id="VOTE_SNO_128">
                <dd>
                  <span className="t_blue">
                    <b>35</b>%
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
                    <b>65</b>%
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
              <a className="btn_likebtn_like">
                <dl>
                  <dd>부활 반대</dd>
                </dl>
              </a>
            </li>
          </ul>
        </div>
      </div>
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
    </div>
  );
}
