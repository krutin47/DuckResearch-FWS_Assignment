/**
 * @file Register User Form component.
 * @author Krutin Trivedi
 */

//importing Components & required Modules
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from "react-bootstrap";
import classnames from "classnames";
import { toast } from 'react-toastify';
import axios from 'axios';

const isEmpty = require("is-empty");

//TODO: Database connection and sending and requesting the info
class DuckSurveyForm extends React.Component {
    constructor (props) {
        super(props);
        
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.validateField = this.validateField.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.errorClass = this.errorClass.bind(this);
        
        this.state = {
            firstName: '',
            lastName: '',
            location: '',
            time: '',
            duckCount: '',
            food: '',
            foodCount: '',
            
            formErrors: {firstName: '', lastName: '', location: '', time: '', duckCount: '', food: '', foodCount: ''},
            firstNameValid: false,
            firstNameTouch: false,
            lastNameValid: false,
            lastNameTouch: false,
            locationValid: false,
            locationTouch: false,
            timeValid: false,
            timeTouch: false,
            duckCountValid: false,
            duckCountTouch: false,
            foodValid: false,
            foodTouch: false,
            foodCountValid: false,
            foodCountTouch: false,
            formValid: false,
            errors: {},
            success: '',
            success_msg: '',
        }
    }
    
    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name + ' ---> ', value);
        this.setState({[name]: value},
                      () => { this.validateField(name, value) });
    }
      
    validateField(fieldName, value) {
        
        // console.log("----------value----------");
        // console.log(value);

        let fieldValidationErrors = this.state.formErrors;
        let firstNameValid = this.state.firstNameValid;
        let lastNameValid = this.state.lastNameValid;
        let locationValid = this.state.locationValid;
        let timeValid = this.state.timeValid;
        let foodValid = this.state.foodValid;
        let foodCountValid = this.state.foodCountValid;
        let duckCountValid = this.state.duckCountValid;
      
        switch(fieldName) {
            case 'firstName':
                this.setState({firstNameTouch : true});
                firstNameValid = !isEmpty(value.trim());
                fieldValidationErrors.firstName = firstNameValid 
                    ? <p className="isValid">hey there, {this.state.firstName}!</p> 
                    : <p className="has-error">Don't be shy, Enter your first name</p>;
                break;
            case 'lastName':
                this.setState({lastNameTouch : true});
                lastNameValid = !isEmpty(value.trim());
                fieldValidationErrors.lastName = lastNameValid 
                    ? <p className="isValid">Nice Name you got there.</p> 
                    : <p className="has-error">I am sure you got a nice Last name.</p>;
                break;
            case 'location':
                this.setState({locationTouch : true});
                locationValid = !isEmpty(value.trim());
                fieldValidationErrors.location = locationValid 
                    ? <p className="isValid">{this.state.location} Sounds nice place.</p> 
                    : <p className="has-error">Ducks has to be somewhere!!</p>;
                break;
            case 'time':
                this.setState({timeTouch : true});
                timeValid = !isEmpty(value.trim());
                fieldValidationErrors.time = timeValid 
                    ? <p className="isValid">Time well spend with Ducks!</p> 
                    : <p className="has-error">Ducks get hungry at which time?</p>;
                break;
            case 'duckCount':
                this.setState({duckCountTouch : true});
                duckCountValid = (!isEmpty(value) && value>0);
                fieldValidationErrors.duckCount = duckCountValid 
                    ? <p className="isValid">Woah! you are {value>5 ? "very" : ''} {value>10 ? "very" : ''} Kind.</p> 
                    : <p className="has-error">you must feed 1 Duck atleast.</p>;
                break;
            case 'food':
                this.setState({foodTouch : true});
                foodValid = !isEmpty(value.trim());
                fieldValidationErrors.food = foodValid 
                    ? <p className="isValid">Ducks loves to eat {this.state.food}.</p> 
                    : <p className="has-error">Ducks hates you when you go empty handed.</p>;
                break;
            case 'foodCount':
                this.setState({foodCountTouch : true});
                foodCountValid = (!isEmpty(value) && value>0);
                fieldValidationErrors.foodCount = foodCountValid 
                    ? <p className="isValid">Woah! you {value>3 ? (value<7 ? "over fed them" : "fed them TOO much!!") : 'fed them in good amount'} </p> 
                    : <p className="has-error">I think you forgot to add weight of food</p>;
                break;
            default:
                break;
        }
        
        this.setState({ formErrors: fieldValidationErrors,
                        firstNameValid: firstNameValid,
                        lastNameValid: lastNameValid,
                        locationValid: locationValid,
                        timeValid: timeValid,
                        duckCountValid: duckCountValid,
                        foodValid: foodValid,
                        foodCountValid: foodCountValid
                    }, this.validateForm);
    }
    
    validateForm() {
        // console.log("FormValid --->"+ this.state.foodValid);
        this.setState({
            formValid: (
                this.state.firstNameValid && 
                this.state.lastNameValid &&
                this.state.locationValid &&
                this.state.timeValid &&
                this.state.foodValid &&
                this.state.foodCountValid &&
                this.state.duckCountValid
                )
            });
    }
      
    errorClass(error) {
        return(error ? 'is-valid' : 'has_error');
    }

    onSubmitForm(e){
        e.preventDefault();

        if(this.state.formValid) {

            const duckSurvey = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                location: this.state.location,
                time: this.state.time,
                duckCount: this.state.duckCount,
                food: this.state.food,
                foodCount: this.state.foodCount
            }

            axios.post("http://localhost:5000/survey/addSurvey", duckSurvey)
                .then(res => {
                    if(res.data.length > 0) {
                        console.log(res.data);
                        if(res.data === "Oops! survey already exist.") {
                            this.props.history.push("/errorCode400");
                        } else {
                            toast.success("your survey has been submitted.", {
                                position: toast.POSITION.BOTTOM_RIGHT
                            });
                            this.props.history.push("/success");
                        }
                    } else {
                        toast.error("Got null reponse from server.", {
                            position: toast.POSITION.BOTTOM_RIGHT
                        });
                        this.props.history.push("/errorCode400");
                    }
                })
                .catch(err => {
                    console.log("Error ---> "+ err);
                    this.props.history.push("/errorCode400");
                });
        } else{

        }
    }

    render(){
        return(
            <form>  
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <div className="form-label-group">
                            <div>
                                <label htmlFor="firstName">First Name</label>
                                <input className={ classnames("form-control", { 'is-valid': this.state.firstNameValid && this.state.firstNameTouch , 'is-invalid': !this.state.firstNameValid && this.state.firstNameTouch })}
                                    type="text"  
                                    name="firstName"
                                    placeholder="Please Enter Your First Name"
                                    value={this.state.firstName}  
                                    onChange={this.handleUserInput} required />
                                {this.state.formErrors.firstName}
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6 mb-3">
                        <div className="form-label-group">
                            <div>
                                <label htmlFor="lastName">Last Name</label>
                                <input className={ classnames("form-control", { 'is-valid': this.state.lastNameValid && this.state.lastNameTouch , 'is-invalid': !this.state.lastNameValid && this.state.lastNameTouch })}
                                    type="text"   
                                    name="lastName"
                                    placeholder="Please Enter Your Last Name"
                                    value={this.state.lastName}  
                                    onChange={this.handleUserInput} required />
                                {this.state.formErrors.lastName}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 mb-3">
                        <div className="form-label-group">
                            <div>
                                <label htmlFor="location"> Q1: Where did you fed the Ducks? </label>
                                <input className={ classnames("form-control", { 'is-valid': this.state.locationValid && this.state.locationTouch , 'is-invalid': !this.state.locationValid && this.state.locationTouch })} 
                                    type="text" 
                                    name="location"
                                    placeholder="Please Enter the Location"
                                    value={this.state.location}
                                    onChange={this.handleUserInput}  required/>
                                {this.state.formErrors.location}
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-12 mb-3">
                        <div className="form-label-group">
                            <div>
                                <label htmlFor="time"> Q2: What time did you fed the Ducks? </label>
                                <input className={ classnames("form-control", { 'is-valid': this.state.timeValid && this.state.timeTouch , 'is-invalid': !this.state.timeValid && this.state.timeTouch })}
                                    type="time"
                                    name="time"
                                    placeholder="Please Enter the time"
                                    value={this.state.time}
                                    onChange={this.handleUserInput} required />
                                {this.state.formErrors.time}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 mb-3">
                        <div className="form-label-group">
                            <div>
                                <label htmlFor="Duck Count"> Q3: How many Ducks you fed? </label>
                                <input className={ classnames("form-control", { 'is-valid': this.state.duckCountValid && this.state.duckCountTouch , 'is-invalid': !this.state.duckCountValid && this.state.duckCountTouch })}
                                    type="number"
                                    name="duckCount"
                                    min="1"
                                    placeholder="Please Enter the Number of ducks fed"
                                    value={this.state.duckCount}
                                    onChange={this.handleUserInput} required />
                                {this.state.formErrors.duckCount}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 mb-3">
                        <div className="form-label-group">
                            <div>
                                <label htmlFor="food"> Q4: What food you fed to Ducks? </label>
                                <input className={ classnames("form-control", { 'is-valid': this.state.foodValid && this.state.foodTouch , 'is-invalid': !this.state.foodValid && this.state.foodTouch })}
                                    type="text"
                                    name="food"
                                    placeholder="Please Enter the type of food"
                                    value={this.state.food}
                                    onChange={this.handleUserInput} required />
                                {this.state.formErrors.food}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 mb-3">
                        <div className="form-label-group">
                            <div>
                                <label htmlFor="food Count"> Q5: How much food you fed to Ducks? </label>
                                <input className={ classnames("form-control", { 'is-valid': this.state.foodCountValid && this.state.foodCountTouch , 'is-invalid': !this.state.foodCountValid && this.state.foodCountTouch })}
                                    type="number"
                                    name="foodCount"
                                    min="0"
                                    placeholder="Please Enter the Number of food used to fed"
                                    value={this.state.foodCount}
                                    onChange={this.handleUserInput} required />
                                {this.state.formErrors.foodCount}
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-12 mb-3 mt-2">
                        <Button className="btn pull-right" block 
                            type="submit" 
                            disabled={!this.state.formValid} 
                            onClick={this.onSubmitForm}>Submit</Button>
                    </div>
                </div>
            </form>
        );
    }
}

export default withRouter(DuckSurveyForm);