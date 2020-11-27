# Duck Feeding Survey 
The main purpose of this web application is to create a platform where people all over the world can contribute to the research of Duck Feeding. People can easily complete the survey just by completing some question. At the same time scientist can look at the Data provided by the people all over the world and it will help them complete study.

# Approch to problem
The standard way is to build an web application, thus it can be accessible by all the people over the globe and Scientist. Scientist will have real time data to complete their study. As the purpose of this application is to provide only a survey, thus it will be a one pager application.

In term of Technology stack I used the MERN stack because, It is a easy to build one pager application with it then others. it is very light weight application to DOM renedering.

# Future Scope/improvments
I would love to add profile managment as full feature with redux. Also, I would love to use Docker and AWS serverless for API calls.

# Work of excellency
* Form validation in front-end and back-end
* Used GitFlow WorkFlow.
* Used Toast(UI element) to display critical information.
* Added profile management only in backend in time constrain.
* WIP: Used industry standard for password reseting with Hashes JWT tokens.

# Time Spend
* Total-time spend: 8:30 Hours,
* Time infront of screen: 6:30 Hours,
* Time used to develop backend: 1:30 Hour,
* Time used to develop frontend: 5:00 Hours

**Note** I had an assignment and an project submission and presentation. Thus, I started late and there was too much switching over with this project and my academics.

## Authors
- Krutin Trivedi

## What are the framework & libraries used ?
This application is built using the following frameworks and libraries :package:.
* [React Js](https://reactjs.org/) - Web application Library
* [Bootstrap](https://getbootstrap.com/)  - CSS Framework
* [Google Fonts](https://fonts.google.com/) - Web Fonts Library
* [HTML and CSS](https://www.w3schools.com/html/)- Web designing Language
* [Node JS](https://nodejs.org/en/) - MVC Framework to build Web Services.
* [MongoDB](https://www.mongodb.com/) - NoSQL Database used for data storage.

## What cloud service did we used to store data ? 
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

## What are the prerequisite required ?
 * Node JS - [Install](https://nodejs.org/en/download/)
 * React JS - [Install](https://reactjs.org/docs/add-react-to-a-website.html)
 * Express JS - [Install](https://expressjs.com/en/starter/installing.html)

## How to run the application ?
1. Clone the repo to your local machine using `https://github.com/krutin47/DuckResearch-FWS_Assignment.git`
2. Navigate to the workspace folder using `cd DuckResearch-FWS_Assignment`
3. Run `npm install` to install all the packages that are require to run the backend of the project. (in case you are having problem run `npm install bcryptjs express is-empty jsonwebtoken mongoose passport passport-jwt validator cors dotenv nodemailer`)

### Front End
4. Navigate to front-end workspace using `cd frontend`
5. Run `npm install` to install all the packages that are require to run the front-end of the project. (in case you are having problem run `npm install react-bootstrap bootstrap axios classnames react-router-dom react-toastify` and `npm install --save react-router-dom`)
6. Launch the app using `npm start`
7. Now the application will open in your default browser in following URL [localhost:3000](http://localhost:3000/).

### Back End
8. Run the server by using `node app.js` in separte terminal. 
9. Now the server will be up in following URL [localhost:5000](http://localhost:5000/).

**Note** The above steps will succeed only if the prerequisite platforms are installed in your local machine.

## What you can expect to see in here ?

### For general people
You will see one web page where you submit your survey. it will have have you redirected to success page or error page depending on your response. 

`Home`: http://localhost:3000/.
`Success`: http://localhost:3000/success.
`Error`: http://localhost:3000/errorCode400.

### For Admin/Scientist 
This feature will allow scientist to view the survey data in real time. which is displayed as table.

`Display Surveys`: http://localhost:3000/displaySurveys.

# Fun Fact
All input validation are intened to bring smile on your face. try to play with them. Have a Fun Surveying!!!