<img width="1320" alt="Screenshot 2024-05-03 at 4 01 30 PM" src="https://github.com/whiteHatpro/Assigment_Weekday/assets/77486870/15fa4aec-6e06-4bb4-806d-c897bde485e8"># Candidate Application Platform/Weekday Frontend Assignment

## Overview
The Candidate Application Platform is a web application that allows users to view job listings, filter jobs based on various criteria, and implement infinite scroll for a seamless browsing experience. The platform provides a user-friendly interface for viewing and applying to jobs.

## Requirements

### Job Cards
Each job listing is displayed as a card containing the following information:

- Job title
- Company name
- Location
- Job description (limited to a certain number of characters with an option to expand)
- Experience required
- Apply button/link

### Filters
Filters are implemented to allow users to refine the job listings based on:

- Min experience
- Company name
- Location
- Remote/on-site
- Tech stack
- Role
- Min base pay

### Infinite Scroll
Infinite scroll is implemented to load additional job listings as the user scrolls down the page. The platform fetches and displays more jobs automatically without requiring the user to click on a "Load More" button.

### Responsive Design (Optional)
The platform is responsive and works well on different screen sizes, including mobile devices.

### Technology Stack
The following tech stack is used for the assignment:

- ReactJs
- Redux
- CSS
- Material UI

### API Integration
The jobs data is fetched from the following API:
```sh
(https://api.weekday.technology/adhoc/getSampleJdJSON)
```
The API takes "limit" and "offset" as request body parameters and returns the list of jobs and total count of jobs present.

### Getting Started
To get started with the Candidate Application Platform, follow these steps:

- Clone this repository to your local machine.
- Install dependencies by running npm install or yarn install.
- Run the development server by running npm start or yarn start.
- Open the application in your web browser.


### Additional Notes
- The sidebar from the UI design is not replicated in this implementation.
- For the scope of this assignment, only the "Search jobs" section needs to be implemented.
- Ensure to refer to the provided UI designs and integrate infinite scroll behavior similar to the provided extension.

### Screenshots
<img width="1320" alt="Screenshot 2024-05-03 at 4 01 30 PM" src="https://github.com/whiteHatpro/Assigment_Weekday/assets/77486870/503942c7-0c9d-48e0-98d9-0db9c3794d44">
<img width="1481" alt="Screenshot 2024-05-03 at 4 01 11 PM" src="https://github.com/whiteHatpro/Assigment_Weekday/assets/77486870/dfc1d8eb-7a77-41e9-9f12-8703c31e6f17">
<img width="844" alt="Screenshot 2024-05-03 at 4 01 18 PM" src="https://github.com/whiteHatpro/Assigment_Weekday/assets/77486870/03a8e1b9-38cf-4bb5-a98d-b44a674fcc9d">
<img width="1131" alt="Screenshot 2024-05-03 at 4 01 51 PM" src="https://github.com/whiteHatpro/Assigment_Weekday/assets/77486870/7712e466-4a25-4383-a23a-649b1cf16865">









