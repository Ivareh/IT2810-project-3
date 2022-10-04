import { CommitItem, DataItem, IssueItem } from "../interface/DataFormat";


// Gets initial data from web storage to display in the table
export function getInitialData(data: string): DataItem[] {
    if (data) {
        return JSON.parse(localStorage.getItem(data)) as DataItem[];
    }
    return [];
}


// We wanted to have an object with parameters of interest, so this method creates a list with new commit objects with only the parameters we want.
export function getCommitData(): CommitItem[] {
    const initialCommitData = getInitialData("commits") as CommitItem[]
    const desiredKeys = ["id", "title", "author_name", "committer_name", "committed_date"] // Desired keys to get from object
    let desiredParametersCommitItemList: CommitItem[] = {} as CommitItem[];

    initialCommitData.forEach((commit: any) => {
        let desiredParametersValues: Array<string> = [];
        Object.keys(commit).forEach((key, index) => {
            if (desiredKeys.includes(key)) {
                desiredParametersValues.push(commit[key]);
            }
        })
        const desiredParametersCommit = {
            id: desiredParametersValues[0], // Same as desiredKeys[0]
            title: desiredParametersValues[1], // Same as desiredKeys[1]
            author_name: desiredParametersValues[2], // Same as desiredKeys[2]
            committer_name: desiredParametersValues[3], // Same as desiredKeys[3]
            committed_date: desiredParametersValues[4] // Same as desiredKeys[4]
        } as unknown as CommitItem;
        desiredParametersCommitItemList[initialCommitData.indexOf(commit)] = desiredParametersCommit
    })
    return Object.values(desiredParametersCommitItemList)
}

// We wanted to have an object with parameters of interest, so this method creates a list with new objects with only the parameters we want.
export function getIssueData(): IssueItem[] {
    const initialIssueData = getInitialData("issues") as IssueItem[]
    const desiredKeys = ["id", "title", "description", "state", "created_at"] // Desired keys to get from object

    let desiredParametersIssueItemList: IssueItem[] = {} as IssueItem[];

    initialIssueData.forEach((issue: any) => {
        let desiredParametersValues: Array<string> = [];
        Object.keys(issue).forEach((key, index) => {
            if (desiredKeys.includes(key)) {
                desiredParametersValues.push(issue[key]);
            }
        })
        const desiredParametersIssue = {
            id: desiredParametersValues[0], // Same as desiredKeys[0]
            title: desiredParametersValues[1], // Same as desiredKeys[1]
            description: desiredParametersValues[2], // Same as desiredKeys[2]
            state: desiredParametersValues[3], // Same as desiredKeys[3]
            created_at: desiredParametersValues[4] // Same as desiredKeys[4]
        } as unknown as IssueItem;
        desiredParametersIssueItemList[initialIssueData.indexOf(issue)] = desiredParametersIssue
    })
    return Object.values(desiredParametersIssueItemList)
}

// Takes in @param datatype and returns the data from the web storage of that type
export function getData(datatype: string): DataItem[] {
    if (datatype == "commits") {
        return getCommitData()
    } else if (datatype == "issues") {
        return getIssueData()
    }

};


