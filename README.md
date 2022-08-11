# Developer Notes:

The original assignment was pretty simple and did not require the usage of many react hooks.
So, beside the minimal changes required by the assignment, I have also added a few features:

* The App component is fetching the data from a fake backend (FakeBackendService provided)
* I have added some randomness in the data fetch, the promise sometimes returns an error. I have added a refresh button so that employees can be re-fetched if necessary
* Added sorting to the table
* Added filtering by name to the table
* Added ability to switch between a light and a dark theme


## Things I have used:

* I had to look into the h8k-design as I had never used it before: https://h8k-design.vercel.app/
* I had to lookup the HTML codes for the up/down arrows used in the table headers (&#8595; and &#8593;)
* Jest documentation: https://jestjs.io/docs/mock-functions
* Material icons: https://fonts.google.com/icons


## Changes to the existing app

* I had to update react-scripts due to an error with `waitFor` in the tests
* I had to change the salary input value for the test `save button should be disabled when employee salary changes to an invalid value` because my table is now sorted so the test was not updating the correct value.


# React: Editable Table

Complete a partially completed React editable table application. Certain core React functionalities have already been implemented. 

Complete the application as shown below in order to pass all the unit tests.

![](https://hrcdn.net/s3_pub/istreet-assets/dDSNzZSlzAKqWzyDEU1LtQ/editable_table.gif)

The application has 3 components:

*   The App component, which renders the table with employee data.
*   The Employee component, which forms an employee entry with name, position, and salary.
*   The AddEmployee component, which consists of multiple inputs for adding a new employee entry.

The application has the following functionalities:

*   **For the Employee component:**

    *   Each employee object has the following keys:

        *   id: The unique ID of the employee (Integer)

        *   name: The name of the employee (String)

        *   position: The current role of the employee in the company (String)

        *   salary: The current salary of the employee (Integer)

    *   Initially, **the "Save" buttons for saving a new salary are disabled.**

    *   The salary field becomes editable when clicked.

    *   The "Save" button for a specific employee is only enabled when the edited salary value is set and different from the existing value.

    *   Clicking the "Save" button updates the salary field with the new value, and the salary field again becomes not editable.

*   **For the AddEmployee component:**

    *   Each new employee added to the list should have a unique incremental ID property attached to it.

    *   Initially, the "Add" button for adding a new employee entry is disabled.

    *   The "Add" button becomes enabled only when all fields are filled.

    *   Clicking the "Add" button adds a new employee entry to the table and reset input fields.

The following data-testid attributes are required in the component for the tests to pass:

*   The table should have the data-testid attribute 'table'.
*   The employee uneditable salary fields should have the data-testid attributes 'employee-salary-div-0', 'employee-salary-div-1', and so on.
*   The employee salary inputs should have the data-testid attributes 'employee-salary-input-0', 'employee-salary-input-1', and so on.
*   The "Save" buttons should have the data-testid attributes 'employee-save-button-0', 'employee-save-button-1', and so on.
*   The new employee name input should have the data-testid attribute 'new-employee-name-input'.
*   The new employee position input should have the data-testid attribute 'new-employee-position-input'.
*   The new employee salary input should have the data-testid attribute 'new-employee-salary-input'.
*   The "Add" button should have the data-testid attribute 'add-new-employee-button'.

Please note that the component has the above data-testid attributes for test cases and certain classes and ids for rendering purposes. It is advised not to change them.

## Environment 

- React Version: 16.13.1
- Node Version: 14(LTS)
- Default Port: 8000

## Project Specifications 

**Read-Only Files**
- `src/App.test.js`

**Commands**
- run: 
```bash
npm start
```
- install: 
```bash
npm install
```
- test: 
```bash
npm test
```
