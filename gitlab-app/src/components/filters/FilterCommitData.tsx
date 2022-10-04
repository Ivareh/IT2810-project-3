import { CommitItem, CommitKey } from "../interface/DataFormat"

// Filter commit data by id
function filterById(data: CommitItem[], id: string) {
  let filtered = data.filter(e => e.id.toString() === id)
  if (filtered.length === 0) {
    throw new Error("No data found")
  }
  return filtered
}

// Filter commit data by title
function filterByCommitTitle(data: CommitItem[], title: string) {
  let filtered = data.filter(e => e.title.toLowerCase().includes(title.toLowerCase()))
  if (filtered.length === 0) {
    throw new Error("No data found")
  }
  return filtered
}

// Filter commit data by author name
function filterByCommitAuthor(data: CommitItem[], Author: string) {
  let filtered = data.filter(e => e.author_name.toLowerCase().includes(Author.toLowerCase()))
  if (filtered.length === 0) {
    throw new Error("No data found")
  }
  return filtered
}

// Filter commit data by committer name
function filterByCommitCommitter(data: CommitItem[], Committer: string) {
  let filtered = data.filter(e => e.committer_name.toLowerCase().includes(Committer.toLowerCase()))
  if (filtered.length === 0) {
    throw new Error("No data found")
  }
  return filtered
}

// Filter commit data by committed date
function filterByCommitDate(data: CommitItem[], Date: string) {
  let filtered = data.filter(e => e.committed_date.split("T")[0].toLowerCase().includes(Date.toLowerCase()))
  if (filtered.length === 0) {
    throw new Error("No data found")
  }
  return filtered
}

// Filter commit data by filtertype and filtervalue
export function filterByCommit(data: CommitItem[], filterType: string, filterValue: string) {
  switch (filterType) {
    case CommitKey.ID:
      return filterById(data, filterValue)
    case CommitKey.TITLE:
      return filterByCommitTitle(data, filterValue)
    case CommitKey.AUTHOR_NAME:
      return filterByCommitAuthor(data, filterValue)
    case CommitKey.COMMITTER_NAME:
      return filterByCommitCommitter(data, filterValue)
    case CommitKey.COMMITTED_DATE:
      return filterByCommitDate(data, filterValue)
  }
}
