# it2810-h22-Team-62
Welcome to the app in Project 2, created by Team 62!

To install the required packages run:

    $ npm install 

Change directory to `gitlab-app/` and execute `npm start` to run the Webapp.

# Documentation
The GitLab app presents information about commits or issues of a chosen GitLab Repo. You need to insert the GitLab domain, Project ID and a personal access token with the scope `read_user`. After the GitLab data is loaded you can switch between viewing issues and commits. The data is presented with our chosen parameters (e.g. `title`, `description`, `author_name` and `created_at` for commits) in a table and there is an option to filter the data by the parameters.

## Technical Documentation

### Component structure
The Project uses React and Typescript to create both the UI and backend components of the webapp. We used the React component library Material UI to help structure the UI components. One of the features of React is that it is declarative, so if the data changes only the affected components get updated and rendered. We used React's state and props features to store independent component state or automatically update shared state between components. E.g. the two classes `./tables/GitLabCommitTable&&GitLabIssueTable` displays a table of either issue or commit data. It is the same data from the two states `[commitData]|[issueData]` in `./GitLabRepo` and the displayed table data gets automatically updated when the two states in `./GitLabRepo` gets updated. 

### Download GitLab Data
To download the GitLab data, we used the asynchronous call `fetch(url)` in the function `fetchCommits|fetchIssues` `./forms/InputForm`. We only use commits and issues data from the GitLab API, but can expand with other types of data. To receive data, we use Fetch() from the javascript library and get the data in JSON objects. The objects is then stored in the localStorage of the HTML Web Storage in the function `handleSubmit()` in respectively `InputForm`. LocalStorage is chosen because the user may want to display the same data as the previous session. For safety reasons and limited cache size, this is usually not a good solution, but it satisfies for this project.

### Darkmode
To enable/disable darkmode globally on the website, we used Context API to render the mode to all the components. In the component`./Footer`, the component `./SwapModes` is rendered. `./SwapModes` provides the darkmode theme, while also being able to switch back to default theme (light/white). Since the footer is always rendered on top of the hierarchy, `App.tsx`, it was one of the sensible options to implement Context API to render darkmode between the rest of the components.

### Filter
To filter the data in the tables that include the commits or the issues, we render a user input in `./filter/FilterFormIssue|FilterFormCommit` dropdown to choose the Filtertype and an Inputfield to set the value of the filter. The filtered data is set in `GitLabRepo` after clicking the "Filter" button. As mentioned in [Component structure](#Component-structure), `./tables/GitLabCommitTable|GitLabIssueTable` gets updated when the new filtered data in `./GitLabRepo` gets set.

### Responsive Webdesign
That the Webapp can be used on multiple end devices we implemented responsive webdesign. So the website looks good and is easy to use independent of the screen size. Therfore we used Viewport to define the visible area depending on the device used.
Media-queries like `@media screen and (max-device-width: 480px) {grid-template-columns: repeat(2, 1fr)}` define breakpoints so the design changes on each side of the breakpoint. This is useful to define a different layot for different screen sizes.
Image scaling is implemented by the 'background-size: cover' property in `header.css`.
The elements on the page rearrange according to the screensize so that the usual user
experience is ensured by a flexible layout.

## Testing
To run the tests, enter `npm test`. We have one unit test which tests several aspects the component `InputForm`, and we have one snapshot test which creates a snapshot of the application, and compares it to the reference snapshot file created initially to make sure our UI did not change unexpectedly.

#### Behavior of Components
Our team is quite inexperienced when it comes to testing, but we managed to test whether or not the inputs for the gitlab data were mutable and if they rendered correctly. We also had major issues with getting Jest to work with typeScript, so our testing was not as extensive as we had hoped. However, we feel like we got a good grasp of what we are suppose to test in React components and how the Jest library accomplishes this.

### User Interface and Responsive Design
For testing the responsiveness of the webapp, we  mainly tested it in the most common used browsers, i.e. Google Chrome and Firefox. During the project, we used Google Chrome’s built-in “developer tools” to test the responsiveness of the website. In addition to testing on normal screen sizes, we  tested the webapp on the following devices in developer tools:

•	iPhone SE
•	iPhone 12 Pro
•	Pixel 5
•	Samsung Galaxy S8+
•	Samsung Galaxy S20 Ultra
•	iPad Air
•	iPad Mini
•	Surface Pro 7
•	Surface Duo

For each of these devices, we tested both the responsiveness and functionality of the webapp. For mobile screens and tablets, we have tested the responsiveness in both vertical and horizontal orientation by checking how the components were placed and scaled in relation to each other and whether any of the components had any unwanted behaviors. 
