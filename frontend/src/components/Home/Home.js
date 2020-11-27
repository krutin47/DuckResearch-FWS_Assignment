/**
 * @file Home page of the Application.
 * @author Krutin Trivedi
 */

//importing the required Module
import React from 'react';
import { Container } from 'react-bootstrap';
import DuckSurveyForm from '../Survey/SurveyForm';
import image_view from '../assets/images/duckFeeding.jpg'

function Home() {
  
  return (
    <div class="container-fluid pt-3 pb-5" style={{backgroundImage:`url(${image_view})`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundAttachment:'fixed'}}>
      <div class="d-flex justify-content-center align-items-center pt-5">
        <div className="card my-3" style={{width:"38rem", 'box-shadow': '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)', zIndex:'2000'}}>
          {/* <img className="card-img-top" src={image_view} alt="Card image cap"/> */}
          <div className="card-body text-center">
            <h5 className="card-title pt-2"><strong>Duck Feeding Survey</strong></h5>
          </div>
          <div className="px-5 pb-3">
            <DuckSurveyForm/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;