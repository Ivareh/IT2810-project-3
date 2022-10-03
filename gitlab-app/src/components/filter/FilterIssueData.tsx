import { IssueItem, IssueKeys } from "../interface/DataFormat";

// Filter data by id
function filterByIssueId(data: IssueItem[], id: string) {
  let filtered = data.filter((e) => e.id.toString() == id);
  if (filtered.length == 0) {
    throw new Error("No data found");
  }
  return filtered;
}

// Filter data by title
function filterByIssueTitle(data: IssueItem[], title: string) {
  let filtered = data.filter((e) =>
    e.title.toLowerCase().includes(title.toLocaleLowerCase())
  );
  if (filtered.length == 0) {
    throw new Error("No data found");
  }
  return filtered;
}

// Filter data by description
function filterByIssueAuthor(data: IssueItem[], description: string) {
  let filtered = data.filter((e) =>
    e.description.toLowerCase().includes(description.toLowerCase())
  );
  if (filtered.length == 0) {
    throw new Error("No data found");
  }
  return filtered;
}

// Filter data by state
function filterByIssueState(data: IssueItem[], state: string) {
  let filtered = data.filter((e) =>
    e.state.toLowerCase().includes(state.toLowerCase())
  );
  if (filtered.length == 0) {
    throw new Error("No data found");
  }
  return filtered;
}

// Filter data by created date
function filterByIssueDate(data: IssueItem[], Date: string) {
  let filtered = data.filter((e) =>
    e.created_at.toLowerCase().includes(Date.toLowerCase())
  );
  if (filtered.length == 0) {
    throw new Error("No data found");
  }
  return filtered;
}

// Export Function to filter data by filter type and filter value
export function filterByIssue(
  data: IssueItem[],
  filterType: string,
  filterValue: string
) {
  switch (filterType) {
    case IssueKeys.ID:
      return filterByIssueId(data, filterValue);
    case IssueKeys.TITLE:
      const hey = filterByIssueTitle(data, filterValue);
      return hey;
    case IssueKeys.DESCRIPTION:
      return filterByIssueAuthor(data, filterValue);
    case IssueKeys.STATE:
      return filterByIssueState(data, filterValue);
    case IssueKeys.CREATED_AT:
      return filterByIssueDate(data, filterValue);
  }
}
