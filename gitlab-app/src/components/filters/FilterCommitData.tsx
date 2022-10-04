import { CommitItem, CommitKey } from "../interface/DataFormat"

function filterById(data: CommitItem[], id: string) {
  let filtered = data.filter(e => e.id.toString() == id)
  if (filtered.length == 0) {
    throw new Error("No data found")
  }
  return filtered
}

function filterByCommitTitle(data: CommitItem[], title: string) {
  let filtered = data.filter(e => e.title.toLowerCase().includes(title.toLowerCase()))
  if (filtered.length == 0) {
    throw new Error("No data found")
  }
  return filtered
}

function filterByCommitAuthor(data: CommitItem[], Author: string) {
  let filtered = data.filter(e => e.author_name.toLowerCase().includes(Author.toLowerCase()))
  console.log(Author)
  if (filtered.length == 0) {
    throw new Error("No data found")
  }
  return filtered
}


function filterByCommitCommitter(data: CommitItem[], Committer: string) {
  let filtered = data.filter(e => e.committer_name.toLowerCase().includes(Committer.toLowerCase()))
  if (filtered.length == 0) {
    throw new Error("No data found")
  }
  return filtered
}

function filterByCommitDate(data: CommitItem[], Date: string) {
  let filtered = data.filter(e => e.committed_date.toLowerCase().includes(Date.toLowerCase()))
  if (filtered.length == 0) {
    throw new Error("No data found")
  }
  return filtered
}

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
