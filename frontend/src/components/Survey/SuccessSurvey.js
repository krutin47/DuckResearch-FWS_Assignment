/**
 * @file  Success page component.
 * @author Krutin Trivedi
 */

//importing Components & required Modules
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import image_view from '../assets/images/duckFeeding.jpg';


class SuccessSurvey extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid pt-3 pb-5" style={{backgroundImage:`url(${image_view})`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundAttachment:'fixed', height:'100vh'}}>
        <div className="d-flex justify-content-center align-items-center pt-5 mt-5">
          <div className="card my-3" style={{width:"38rem", 'box-shadow': '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)', zIndex:'2000'}}>
            {/* <img className="card-img-top" src={image_view} alt="Card image cap"/> */}
            <div className="card-body text-center">
              <h5 className="card-title pt-2"><strong>What's Next?</strong></h5>
              <p className="card-text">Go Feed some more Ducks.. They maybe hungry and waiting for you!!!</p>
              <p className="card-text">OR</p>
              <Link className="nav-link" to="/">Fill One More Survey</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SuccessSurvey;
