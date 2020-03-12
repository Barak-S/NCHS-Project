
To get the project up and running, in the project directory, you can run:

### `npm install`
### `npm start`

- This is a React JS application that renders a table for most common causes of death in the United States.

- On initial page render, the application will fetch for all statistics for the most up to date year on the server which is 2017.

- Users have the ability to filter the page results by either searching by state name, or selecting a year from the dropdown.


- Utilized NCHS’s API for Leading causes of death in the United States which can be found at https://catalog.data.gov/dataset/age-adjusted-death-rates-for-the-top-10-leading-causes-of-death-united-states-2013

- React JS Front End
- Ruby on Rails API Back End (can be found at: https://github.com/Barak-S/NCHS-API)
- PostgreSQL database for persisting all relevant state statistics from the NCHS server to the backend.


- The nav-bar & footer components are static and are purely for styling and don't link to any other pages.






