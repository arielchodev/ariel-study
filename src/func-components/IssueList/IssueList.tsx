import React from 'react';
import useIssueList from './hooks/useIssueList';
import IssueListItem from './IssueListItem';
import { IssueListResponseType } from '@/types/issues';

export default function IssueList() {
  const { list } = useIssueList();
  return (
    <ul className="issue_wrap">
      {list &&
        list.map((item: IssueListResponseType) => {
          return <IssueListItem item={item} key={item.id} />;
        })}
    </ul>
  );
}
