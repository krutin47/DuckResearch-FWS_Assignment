/**
 * @file Error page with status code of 400 for the Application.
 * @author Krutin Trivedi
 */

//importing Components & required Modules
import React from 'react';
import { Link } from "react-router-dom";
import image_view from '../assets/images/duckFeeding.jpg';


function Error400(props) {
  return (
    <div className="container-fluid pt-3 pb-5" style={{backgroundImage:`url(${image_view})`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundAttachment:'fixed', height:'100vh'}}>
      <div className="d-flex justify-content-center align-items-center pt-5 mt-5">
        <div className="card my-3" style={{width:"38rem", 'box-shadow': '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)', zIndex:'2000'}}>
          {/* <img className="card-img-top" src={image_view} alt="Card image cap"/> */}
          <div className="card-body text-center">
            <h5 className="card-title pt-2"><strong>Error!! CODE: 400</strong></h5>
            <p className="card-text">We are sorry... but it looks like you are doing something wrong.!</p>
            <p className="card-text">OR</p>
            <p className="card-text">maybe I wrote the code wrong..!</p>
            <Link className="nav-link" to="/">Home Page</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error400;