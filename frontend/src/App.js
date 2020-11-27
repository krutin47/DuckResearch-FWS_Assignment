/**
 * @file The root file for calling all the React Components
 * @authors Milap Bhaderi, Nikita Patel, Yash Shah and Krutin Trivedi
*/

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

//importing the required components
import NavHeader from './components/Navbar/NavHeader';
import Footer from './components/Footer/Footer';

import Home from './components/Home/Home';

//Error pages
import error400 from "./components/error/error400";
import error404 from "./components/error/error404";

//importing CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './main.css'

class App extends Component{
    render() {
		return (
      <Router>
        
        {/* creating Toasts in the Application */}
        <ToastContainer />
        
        {/* This will load the Navbar to all the Components */}
				<NavHeader />

        {/* Home Component */}
        <Route exact path='/' component={Home} />
        
        {/* This are the Error Pages for the application */}
        <Route path='/errorCode400' component={error400} />
        <Route path='/errorCode404' component={error404} />

        {/* This will load the Footer To all Components */}
        <Footer />
      
      </Router>
		);
	}
}

export default App;