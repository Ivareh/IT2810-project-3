export interface CommitItem {
    id: number;
    title: string;
    author_name: string;
    committer_name: string;
    committed_date: string;
  }


export interface IssueItem {
    id: number;
    title: string;
    description: string;
    state: string;
    created_at: string;
  }