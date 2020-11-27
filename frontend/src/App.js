/**
 * @file The root file for calling all the React Components
 * @authors Krutin Trivedi
*/

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

//importing the required components
import NavHeader from './components/Navbar/NavHeader';
import Footer from './components/Footer/Footer';

import Home from './components/Home/Home';

//Success Page
import Success from './components/Survey/SuccessSurvey';

//Display survey Page
import DisplaySurvey from './components/Survey/DisplaySurvey';

//Error pages
import Error400 from "./components/error/error400";
import Error404 from "./components/error/error404";

//importing CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

class App extends Component{
  render() {
    return (
      <Router>
        
        {/* creating Toasts in the Application */}
        <ToastContainer />
        
        {/* This will load the Navbar to all the Components */}
        {/* <NavHeader /> */}

        {/* Home Component */}
        <Route exact path='/' component={Home} />
        
        {/* Success Page of Survey */}
        <Route path='/success' component={Success} />

        {/* Displaying Results of the Survey */}
        <Route path='/displaySurveys' component={DisplaySurvey}/>

        {/* This are the Error Pages for the application */}
        <Route path='/errorCode400' component={Error400} />
        <Route path='/errorCode404' component={Error404} />

        {/* This will load the Footer To all Components */}
        <Footer />
      
      </Router>
    );
  }
}

export default App;