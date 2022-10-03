import { CommitItem, DataItem, IssueItem } from "../interface/DataFormat";


// Gets initial data from web storage to display in the table
export function getInitialData(data: string): DataItem[] {
    if(data) {
        return JSON.parse(localStorage.getItem(data)) as DataItem[];
    }
    return [];
}

// We wanted to have an object with parameters of interest, so this method creates a list with new commit objects with only the parameters we want.
export function getCommitData (): CommitItem[] {
const initialCommitData = getInitialData("commits") as CommitItem[]
return Object.values(initialCommitData)
}

// We wanted to have an object with parameters of interest, so this method creates a list with new objects with only the parameters we want.
export function getIssueData (): IssueItem[] {
  const initialIssueData = getInitialData("issues") as IssueItem[]
  return Object.values(initialIssueData)
}
