import React from 'react';
import useIssueList from './hooks/useIssueList';
import IssueListItem from './IssueListItem/IssueListItem';

export default function IssueList() {
  const { list } = useIssueList();

  return (
    <ul className="issue_wrap">
      {list &&
        list.map((item: any) => {
          return <IssueListItem item={item} key={item.id} />;
        })}
    </ul>
  );
}
