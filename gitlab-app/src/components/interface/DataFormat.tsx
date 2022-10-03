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

export class CommitKeys {
  public static readonly ID = "id";
  public static readonly TITLE = "title";
  public static readonly AUTHOR_NAME = "author_name";
  public static readonly COMMITTER_NAME = "committer_name";
  public static readonly COMMITTED_DATE = "committed_date";
}

export class IssueKeys {
  public static readonly ID = "id";
  public static readonly TITLE = "title";
  public static readonly DESCRIPTION = "description";
  public static readonly STATE = "state";
  public static readonly CREATED_AT = "created_at";
}
