import { IssueItem } from "../interface/DataFormat"

export function filterById(data : IssueItem[], id : string) {
  let filtered = data.filter(e => e.id.toString() == id)
  if (filtered.length == 0) {
    throw new Error("No data found")
  }
  return filtered
}

export function filterByTitle(data : IssueItem[], title : string) {
  let filtered = data.filter(e => e.title == title)
  if (filtered.length == 0) {
    throw new Error("No data found")
  }
  return filtered
}

export function filterByAuthor(data : IssueItem[], description : string) {
  let filtered = data.filter(e => e.description.includes(description))
  if (filtered.length == 0) {
    throw new Error("No data found")
  }
  return filtered
}


export function filterByCommitter(data : IssueItem[], state : string) {
  let filtered = data.filter(e => e.state.includes(state))
  if (filtered.length == 0) {
    throw new Error("No data found")
  }
  return filtered
}

export function filterByDate(data : IssueItem[], Date : string) {
  let filtered = data.filter(e => e.created_at.includes(Date))
  if (filtered.length == 0) {
    throw new Error("No data found")
  }
  return filtered
}

