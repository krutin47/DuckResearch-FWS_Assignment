/**
 * @file Root file for the backend of the Application
 * @author Krutin Trivedi
*/

//importing the Components and required Modules
var express = require('express');
const cors = require('cors');
const passport = require("passport");
var path = require('path');
const mongoose = require('mongoose');
var app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();

app.use(cors());
app.use(express.json());

// establishing mongo atlas connections
mongoose.connect('mongodb+srv://Krutin47:Krushi@2705@cluster0.zmrib.mongodb.net/<dbname>?retryWrites=true&w=majority',
                  { useNewUrlParser: true, useCreateIndex: true}
                );
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes to all the APIs
const userRouter = require('./routes/profileManagement');
app.use('/user', userRouter);

const surveyRouter = require('./routes/survey');
app.use('/survey', surveyRouter)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

// Configuration to run the code on cloud
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.json(__dirname, 'frontend', 'build', 'index.html'));
  });
}