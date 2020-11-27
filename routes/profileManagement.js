/**
 * @file API for Profile management for the Application.
 * @author Krutin Trivedi
 */

const router = require('express').Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const sendMail = require('../utils/sendingEmail');

// Getting User Model
let User = require('../models/user.model');
let ResetPass = require('../models/resetPassword.model');

/* GET users listing. */
router.route('/').get((req, res) => {
  User.find()
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

// To check for Specific User
router.route('/check:id').get((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      res.json(user)
      console.log(user);
      
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// Delete User
router.route('/delete:id').delete((req, res) => {
  console.log(req.params.id);
  User.findByIdAndRemove(req.params.id)
    .exec()
    .then(() => res.json('user deleted.' + req.params.id))
    .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/login').post((req, res) => {
  
  const email = req.body.email;
  const password = req.body.password;
  
  // Find user by email
  User.findOne({ email })
    .then(user => {
      
      // Check if user exists
      if (!user) {
        return res.status(404).json({ emailnotfound: "Email not found" });
      }      
      
      // Check password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: user.id,
            email: user.email,
            role: user.role
          };
          
          // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: "7 days"  // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
});

router.route('/update').post((req, res) => {
  User.findById(req.body.id)
    .then(user => {
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.address = req.body.address;
        user.phone = Number(req.body.phone);
        user.gender = req.body.gender;

        user.save()
            .then(() => res.json('User details Updated! => ' + user))
            .catch(err => res.status(400).json('Error: ' + err));    
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const role = 1;
  const address = '';
  const phone = Number(0000000000);
  const gender = '';

  const newUser = new User({ 
    firstName,
    lastName,
    email,
    password,
    role,
    address,
    phone,
    gender,
  });

  User.findOne({email})
    .then(user => {
        if(user) {
            res.json('Oops! Email id is already taken.');
        } else {
          // Hash password before saving in database
          bcrypt.genSalt(10, (err, salt) => {
            if (err) throw err;
            bcrypt.hash(newUser.password, salt, (error_, hash) => {
              if (error_) console.log(error_);
              newUser.password = hash;
              newUser.save()
                  .then(() => res.json('User added! => ' + newUser))
                  .catch(err => res.status(400).json('Error: ' + err));
            
            });
          });    
        }
    })
    .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/forgot').post((req, res) => {
  
  const email = req.body.email;
  console.log("email", email)

  User.findOne({email})
    .then(user => {
      if(user.email === req.body.email) {
        
        ResetPass.findOne({email})
          .then(existingRequest => {
            
            // const _token = '';

            //payload must be created
            const payload = {
              id: user.id,
              email: user.email,
            };
            console.log("payload", payload)
            console.log("keys.secretOrKey", keys.secretOrKey);

            //sign the token with 3 days of expirations
            jwt.sign(
              payload,
              keys.secretOrKey,
              {
                expiresIn: '2 days' // 3 days in seconds
              },
              (err, token) => {
                
                // if user have already requested for request than update the token
                if (existingRequest) {

                  existingRequest.email = email;
                  existingRequest.token = token;

                  existingRequest.save()
                    .then(() => {
                      sendMail.forgotPassword(email, token);
                      res.json('token details Updated! => ' + existingRequest)
                    })
                    .catch(err => res.status(400).json('Error: ' + err));
                
                } else {

                  const newResetPassRequest = new ResetPass({
                    email: email,
                    token: token, // new token
                  });

                  newResetPassRequest.save()
                    .then(() => {
                      sendMail.forgotPassword(email, token);
                      res.json('token details Added! => ' + newResetPassRequest)
                    })
                    .catch(err => res.status(400).json('Error: ' + err));
                }
              }
            );
          })
          .catch(err => res.status(400).json('Error: ' + err))
      } else {
        res.status(400).json('Error: Email id does not match oue records');
      }   
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

//Reset User Password API
router.route('/reset').post((req, res) => {
  console.log("in the reset API....")
  const _token = req.body._token;
  const password = req.body.password;
  
  jwt.verify(_token, keys.secretOrKey, function(err, decoded) {
    console.log(decoded) // decoded token
    if(!err){
      
      //find the user from User dictonary
      User.findById(decoded.id)
        .then(user => {

            // Hash password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
              if (err) throw err;
              bcrypt.hash(password, salt, (error_, hash) => {
                if (error_) console.log(error_);
                
                user.password = hash;
      
                //Go to Reset Password and delete the record so it can't be used again
                ResetPass.findOneAndRemove(user.email)
                  .exec()
                  .then(() => {
                    
                    //onec that is done save the new password into the database
                    user.save()
                      .then(() => {
                        res.json('User Password Updated! => ' + user)
                      })
                      .catch(err => res.status(400).json('Error: ' + err));
                  })
                  .catch(err => res.status(400).json('Error: ' + err));
              });
            });    
        })
        .catch(err => res.status(400).json('Error: ' + err));
    } else {
      res.json('Error! ' + err);
    }
  });
});

module.exports = router;