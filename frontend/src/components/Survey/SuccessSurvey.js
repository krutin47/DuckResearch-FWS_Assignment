/**
 * @file  Success page component.
 * @author Krutin Trivedi
 */

//importing Components & required Modules
import React, { Component } from 'react';
import { Link } from "react-router-dom";


class SuccessSurvey extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="success" className="oneColumnSection p100-0 forUp">
        <div className="wrapper">
          <div className="text-center wow fadeInDown ">
            <h1 className="display-2">What would you like to do now?</h1>
            <div className="p40-0 forSmallWidth light">
              <p>Go Feed some more Ducks.. They maybe hungry and waiting for you!!!</p>
              <h2>OR</h2>
              <Link className="nav-link" to="/fillSurvey">Fill another SURVEY</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SuccessSurvey;
