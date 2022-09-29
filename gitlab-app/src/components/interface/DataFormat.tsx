export interface DataItem {
  id: number;
}

export interface CommitItem extends DataItem {
    title: string;
    author_name: string;
    committer_name: string;
    committed_date: string;
  }


export interface IssueItem extends DataItem {
    title: string;
    description: string;
    state: string;
    created_at: string;
  }