import { CommitItem } from "../interface/DataFormat"

export function filterById(data : CommitItem[], id : string) {
  let filtered = data.filter(e => e.id.toString() == id)
  if (filtered.length == 0) {
    throw new Error("No data found")
  }
  return filtered
}

export function filterByTitle(data : CommitItem[], title : string) {
  let filtered = data.filter(e => e.title.toLowerCase().includes(title.toLocaleLowerCase()))
  if (filtered.length == 0) {
    throw new Error("No data found")
  }
  return filtered
}

export function filterByAuthor(data : CommitItem[], author_name : string) {
  let filtered = data.filter(e => e.author_name.toLowerCase().includes(author_name.toLowerCase()))
  if (filtered.length == 0) {
    throw new Error("No data found")
  }
  return filtered
}


export function filterByCommitter(data : CommitItem[], committer : string) {
  let filtered = data.filter(e => e.committer_name.toLowerCase().includes(committer.toLowerCase()))
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

