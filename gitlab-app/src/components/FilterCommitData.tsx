import { CommitItem } from "./interface/DataFormat"

export function filterById(data : CommitItem[], id : string) {
  let filtered = data.filter(e => e.id.toString() == id)
  if (filtered.length == 0) {
    throw new Error("No data found")
  }
  return filtered
}

export function filterByTitle(data : CommitItem[], title : string) {
  let filtered = data.filter(e => e.title == title)
  if (filtered.length == 0) {
    throw new Error("No data found")
  }
  return filtered
}

export function filterByAuthor(data : CommitItem[], Author : string) {
  let filtered = data.filter(e => e.author_name.includes(Author))
  if (filtered.length == 0) {
    throw new Error("No data found")
  }
  return filtered
}


export function filterByCommitter(data : CommitItem[], Committer : string) {
  let filtered = data.filter(e => e.committer_name.includes(Committer))
  if (filtered.length == 0) {
    throw new Error("No data found")
  }
  return filtered
}

export function filterByDate(data : CommitItem[], Date : string) {
  let filtered = data.filter(e => e.committed_date.includes(Date))
  if (filtered.length == 0) {
    throw new Error("No data found")
  }
  return filtered
}

