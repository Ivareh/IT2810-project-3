import { IssueItem, IssueKey } from "../interface/DataFormat"

// Filter issue data by id
function filterByIssueId(data: IssueItem[], id: string) {
    let filtered = data.filter(e => e.id.toString() === id)
    if (filtered.length === 0) {
        throw new Error("No data found")
    }
    return filtered
}

// Filter issue data by title
function filterByIssueTitle(data: IssueItem[], title: string) {
    let filtered = data.filter(e => e.title.toLowerCase().includes(title.toLocaleLowerCase()))
    console.log("hey")
    if (filtered.length === 0) {
        throw new Error("No data found")
    }
    return filtered
}

// Filter issue data by description
function filterByIssueDescription(data: IssueItem[], description: string) {
    let filtered = data.filter(e => e.description.toLowerCase().includes(description.toLowerCase()))
    if (filtered.length === 0) {
        throw new Error("No data found")
    }
    return filtered
}

// Filter issue data by committer name
function filterByIssueState(data: IssueItem[], state: string) {
    let filtered = data.filter(e => e.state.toLowerCase().includes(state.toLowerCase()))
    if (filtered.length === 0) {
        throw new Error("No data found")
    }
    return filtered
}

// Filter issue data by created at date
function filterByIssueCreatedAt(data: IssueItem[], Date: string) {
    let filtered = data.filter(e => e.created_at.split("T")[0].toLowerCase().includes(Date.toLowerCase()))
    if (filtered.length === 0) {
        throw new Error("No data found")
    }
    return filtered
}

// Export function filter issue data by data, filtertype and filtervalue
export function filterByIssue(data: IssueItem[], filterType: string, filterValue: string) {
    switch (filterType) {
        case IssueKey.ID:
            return filterByIssueId(data, filterValue)
        case IssueKey.TITLE:
            const hey = filterByIssueTitle(data, filterValue)
            console.log("THIS IS HEY")
            console.log(hey)
            return hey
        case IssueKey.DESCRIPTION:
            return filterByIssueDescription(data, filterValue)
        case IssueKey.STATE:
            return filterByIssueState(data, filterValue)
        case IssueKey.CREATED_AT:
            return filterByIssueCreatedAt(data, filterValue)
    }
}


