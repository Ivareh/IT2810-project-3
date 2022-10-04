// General data item with id
export interface DataItem {
    id: number;
}

// Commit item with id, title, author name, committer name, and committed date
export interface CommitItem extends DataItem {
    title: string;
    author_name: string;
    committer_name: string;
    committed_date: string;
}

// Issue item with id, title, author name, and created date
export interface IssueItem extends DataItem {
    title: string;
    description: string;
    state: string;
    created_at: string;
}

// Strings for commit keys
export class CommitKey {
    public static readonly ID = "id";
    public static readonly TITLE = "title";
    public static readonly AUTHOR_NAME = "author_name";
    public static readonly COMMITTER_NAME = "committer_name";
    public static readonly COMMITTED_DATE = "committed_date";
}

// Strings for issue keys
export class IssueKey {
    public static readonly ID = "id";
    public static readonly TITLE = "title";
    public static readonly DESCRIPTION = "description";
    public static readonly STATE = "state";
    public static readonly CREATED_AT = "created_at";
}
