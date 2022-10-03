import { CommitItem, DataItem, IssueItem } from "../interface/DataFormat";

// Gets initial data from web storage to display in the table
export function getInitialData(data: string): DataItem[] {
  if (data) {
    return JSON.parse(localStorage.getItem(data)) as DataItem[];
  }
  return [];
}

// Gets commit data and returns it as an array of CommitItem
export function getCommitData(): CommitItem[] {
  const initialCommitData = getInitialData("commits") as CommitItem[];
  return Object.values(initialCommitData);
}

// Gets issue data and returns it as an array of IssueItem
export function getIssueData(): IssueItem[] {
  const initialIssueData = getInitialData("issues") as IssueItem[];
  return Object.values(initialIssueData);
}
