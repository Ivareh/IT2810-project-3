import { IssueItem, IssueKey } from "../interface/DataFormat"

function filterByIssueId(data : IssueItem[], id : string) {
  let filtered = data.filter(e => e.id.toString() == id)
  if (filtered.length == 0) {
    throw new Error("No data found")
  }
  return filtered
}

function filterByIssueTitle(data : IssueItem[], title : string) {
  let filtered = data.filter(e => e.title.toLowerCase().includes(title.toLocaleLowerCase()))
  console.log("hey")
  if (filtered.length == 0) {
    throw new Error("No data found")
  }
  return filtered
}

function filterByIssueAuthor(data : IssueItem[], description : string) {
  let filtered = data.filter(e => e.description.toLowerCase().includes(description.toLowerCase()))
  if (filtered.length == 0) {
    throw new Error("No data found")
  }
  return filtered
}

function filterByIssueCommitter(data : IssueItem[], state : string) {
  let filtered = data.filter(e => e.state.toLowerCase().includes(state.toLowerCase()))
  if (filtered.length == 0) {
    throw new Error("No data found")
  }
  return filtered
}

function filterByIssueDate(data : IssueItem[], Date : string) {
  let filtered = data.filter(e => e.created_at.toLowerCase().includes(Date.toLowerCase()))
  if (filtered.length == 0) {
    throw new Error("No data found")
  }
  return filtered
}

export function filterByIssue(data : IssueItem[], filterType: string, filterValue: string){
  switch(filterType){
    case IssueKey.ID:
      return filterByIssueId(data, filterValue)
    case IssueKey.TITLE:
      const hey = filterByIssueTitle(data, filterValue)
      console.log("THIS IS HEY")
      console.log(hey)
      return hey
    case IssueKey.DESCRIPTION:
      return filterByIssueAuthor(data, filterValue)
    case IssueKey.STATE:
      return filterByIssueCommitter(data, filterValue)
    case IssueKey.CREATED_AT:
      return filterByIssueDate(data, filterValue)
  }
}


