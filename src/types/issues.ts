export interface IssueListResponseType extends IssueResponseType {}

export interface IssueResponseType {
  title: string;
  description: string;
  id: number;
  vote: {
    agree: number;
    disagree: number;
  };
}

export interface CommentsResponseType {
  comment: string;
  date: string;
  issueId: number;
  id: number;
}
