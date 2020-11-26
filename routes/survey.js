/**
 * @file API for Profile management for the Application.
 * @author Krutin Trivedi
 */

const router = require('express').Router();

// Getting DuckSurvey Model
const duckModel = require('../models/duck.model');

/* GET Survey listing. */
router.route('/display').get((req, res) => {
  duckModel.find()
    .then(duck => res.json(duck))
    .catch(err => res.status(400).json('Error: ' + err));
});

// To check for Specific data from survey with first name
router.route('/check:firstName').get((req, res) => {
  duckModel.findById(req.params.firstName)
    .then(duck => {
      res.json(duck)
      console.log(duck);
      
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// adding Survey Data to the Data
router.route('/addSurvey').post((req, res) => {
  
  //Parameter validtion
  if (typeof req.body.firstName.trim() === 'undefined' || req.body.firstName.trim() === '') return res.send(JSON.stringify({"status": 400, "error": 'firstName input is wronge..!'}));
  if (typeof req.body.lastName.trim() === 'undefined' || req.body.lastName.trim() === '') return res.send(JSON.stringify({"status": 400, "error": 'lastName input is wronge..!'}));
  if (typeof req.body.location.trim() === 'undefined' || req.body.location.trim() === '') return res.send(JSON.stringify({"status": 400, "error": 'location input is wronge..!'}));
  if (typeof req.body.time.trim() === 'undefined' || req.body.time.trim() === '') return res.send(JSON.stringify({"status": 400, "error": 'time input is wronge..!'}));
  if (typeof req.body.food.trim() === 'undefined' || req.body.food.trim() === '') return res.send(JSON.stringify({"status": 400, "error": 'food input is wronge..!'}));
  if (!req.body.duckCount.trim() || isNaN(req.body.duckCount.trim())) return res.send(JSON.stringify({"status": 400, "error": 'duckCount input is wronge..!'}));
  if (!req.body.foodCount.trim() || isNaN(req.body.foodCount.trim())) return res.send(JSON.stringify({"status": 400, "error": 'foodCount input is wronge..!'}));
  
  //Storing the paramters
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const location = req.body.location;
  const time = req.body.time;
  const food = req.body.food;
  const duckCount
  const foodCount;
  
  //checking if it can be converted into number
  try {
    duckCount = Number(req.body.duckCount);
  } catch (error) {
    return res.send(JSON.stringify({"status": 400, "error": 'duckCount input is wronge..!'}));
  }

  try {
    foodCount = Number(req.body.foodCount);
  } catch (error) {
    return res.send(JSON.stringify({"status": 400, "error": 'foodCount input is wronge..!'}));
  }
  
  //creating new survey object to save
  const newSurvey = new duckModel({ 
    firstName,
    lastName,
    location,
    time,
    duckCount,
    food,
    foodCount
  });

  //checking if that survey is already exist or not!!! to stop spamming of same survey
  duckModel.findOne({newSurvey})
    .then(existingDuckSurvey => {
        if(existingDuckSurvey) {
            res.json('Oops! Survey already exists.');
        } else {
          newSurvey.save()
              .then(() => res.json('Survey added! => ' + newSurvey))
              .catch(err => res.status(400).json('Error: ' + err));    
        }
    })
    .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;