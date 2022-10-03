import { CommitItem, CommitKeys } from "../interface/DataFormat";

// Filter commit item by ID
function filterById(data: CommitItem[], id: string) {
  let filtered = data.filter((e) => e.id.toString() == id);
  if (filtered.length == 0) {
    throw new Error("No data found");
  }
  return filtered;
}

// Filter commit item by title
function filterByCommitTitle(data: CommitItem[], title: string) {
  let filtered = data.filter((e) =>
    e.title.toLowerCase().includes(title.toLowerCase())
  );
  if (filtered.length == 0) {
    throw new Error("No data found");
  }
  return filtered;
}

// Filter commit item by author name
function filterByCommitAuthor(data: CommitItem[], Author: string) {
  let filtered = data.filter((e) =>
    e.author_name.toLowerCase().includes(Author.toLowerCase())
  );
  if (filtered.length == 0) {
    throw new Error("No data found");
  }
  return filtered;
}

// Filter commit item by committer name
function filterByCommitCommitter(data: CommitItem[], Committer: string) {
  let filtered = data.filter((e) =>
    e.committer_name.toLowerCase().includes(Committer.toLowerCase())
  );
  if (filtered.length == 0) {
    throw new Error("No data found");
  }
  return filtered;
}

// Filter commit item by committed date
function filterByCommitDate(data: CommitItem[], Date: string) {
  let filtered = data.filter((e) =>
    e.committed_date.toLowerCase().includes(Date.toLowerCase())
  );
  if (filtered.length == 0) {
    throw new Error("No data found");
  }
  return filtered;
}

// Export Function to filter commit items by filter type and filter value
export function filterByCommit(
  data: CommitItem[],
  filterType: string,
  filterValue: string
) {
  switch (filterType) {
    case CommitKeys.ID:
      return filterById(data, filterValue);
    case CommitKeys.TITLE:
      return filterByCommitTitle(data, filterValue);
    case CommitKeys.AUTHOR_NAME:
      return filterByCommitAuthor(data, filterValue);
    case CommitKeys.COMMITTER_NAME:
      return filterByCommitCommitter(data, filterValue);
    case CommitKeys.COMMITTED_DATE:
      return filterByCommitDate(data, filterValue);
  }
}
