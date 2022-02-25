## How I worked on this project

My goal was to build an online classroom application that high schools would use to complement their on-campus lessons.

- I used React for the frontend and Material-UI library as building block for my components. This is work-in-progress as with time I intend to build a fully responsive frontend using styled-components instead of Material-UI.
- And I used Node.js, Express.js and MongoDB for the backend

## How to navigate this project

### Backend

- Express.js middleware: [Click here](https://github.com/Lambertyubin/e_learning_backend/blob/main/express.js#L32)
- API entry routes: [Click here to view course routes](https://github.com/Lambertyubin/e_learning_backend/blob/main/routes/course.routes.js#L9)
- Example of Database model with Mongoose: [Click here](https://github.com/Lambertyubin/e_learning_backend/blob/main/models/course.model.js#L10)
- Application logic to retrieve data from the MongoDB database: [Click here](https://github.com/Lambertyubin/e_learning_backend/blob/main/controllers/course.controller.js#L8)
- I tested this API's CRUD operations using Postman

### Frontend

- [Link to Frontend](https://github.com/Lambertyubin/e-Learning-platform-frontend)

## Why I built the project this way

### Frontend

- I used React as the major frontend library because its virtual DOM feature provides a smooth user experience whereby only necessary parts of each component are updated when state changes.
- I didn't use a state management library like Redux on purpose. For this app simple `useState` hook is sufficient. In fact, for now there's no complex logic that needs to be shared among many different components.

### Backend

- I choose Node.js due to it does a great job at handling concurrent requests due to its asynchronous event-driven IO. A backend that is fast at processing requests and providing responses without blocking incoming requests was critical for an online classroom platform.
- I also used Express.js due to its popularity at managing middleware needed to manipulate the request and response objects during a request-response cycle. With express, I was able to build a fast RESTful API with all CRUD operations linking to the database.
- MongoDB was used because I needed some flexibility in type of data to store for each video item, as well as scalability as the system grow.

Testing is an essential part of production applications. Testing Library is the go-to library in the React community. I covered the essential features of the app with tests.

## During my extra time, I intend to improve the following:

- Complete the frontend to have a fully-responsive UI based on some cool Figma designs
- Set up continuous integration to run the tests
- Add end-to-end tests with Cypress.

## Available Scripts

### Frontend

- `npm start` to run the application
- `npm test` to run tests

### Backend

- `npm start` to run the application, as it's still in dev stage
- Ensure MongoDB is up and running on port 27017
