# it2810-h22-Team-62
Welcome to the app in Project 2, created by Team 62!

To install the required packages run:

    $ npm install typescript --save-dev @mui/material @mui/icons-material @emotion/react @emotion/styled

Change directory to `gitlab-app/` and execute `npm start` to run the Webapp.

# Documentation
The GitLab app presents information about Commits or Issues of a chosen GitLab Repo.
Therfore you to insert the GitLab domain, Project ID and a personal access token
with the scope `read_user`.
After the GitLab data is loaded you can switch between the Issues and Commits
and filter them.

## Technical Documentation
The Project uses React to create the UI of the Webapp. One of the features of React
is that it is declarative, so if the data changes only the affected components
get updated and rendered.
The tables that represent the GitLab data are defined within the two class
components `GitLabCommitTable` and `GitLabIssueTable` which define the table
structure.

### Download GitLab Data
To download the GitLab Data we used the asynchronous call `fetch(url)`. We chose the
Fetch API to receive the data in JSON. The data is then stored in the localStorage of
the HTML Web Storage. LocalStorage is chosen because of the data should be
available after refresh, but not the next time you visit the website because you
may have a new GitLab Project you want to load.

### Darkmode
For the implementation of a dark mode Context API is used. As Context shares
data with other React components so no code duplication is needed. That
simplifies the maintenance or a future extension the GitLab App.

### Filter
To filter the data in the tables that include the Commits or the Issues we use a
dropdown to choose the Filtertype and an Inputfield to set the value of the
Filter. By clicking "Filter" the values get passed from the frontend to the backend
where the data gets filtered.

### Responsive Webdesign
That the Webapp can be used on multiple end devices we implemented responsive
webdesign. So the website looks good and is easy to use independent of the
screen size. Therfore we used Viewport to ...
Media-queries like ... ensure ...
Image scaling is implemented by ...
The elements on the page rearrange according to the screensize so that the usual user
experience is ensured by a flexible layout.

## Testing
### Jest
#### Snapshottest
#### Behavior of Components
### User Interface and Responsive Design
#### Mobile (small screen)
##### horizontal
##### vertical
#### PC (large screen)
