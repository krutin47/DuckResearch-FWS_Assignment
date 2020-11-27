/**
 * @file  Success page component.
 * @author Krutin Trivedi
 */

//importing Components & required Modules
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from 'axios';
import TableData from "./TableGenerator";

class DisplaySurvey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      surveyData: []
    }
  }

  componentDidMount() {
    axios.get("http://localhost:5000/survey/addSurvey")
      .then(res => {
        if(res.data.length > 0){
          this.setState({surveyData: this.data});
        }else{
          this.props.history.push("/errorCode400");
        }
      }).catch(err => {
        this.props.history.push("/errorCode400");
    });
  }

  render() {
    return (
      <section id="DisplaySurvey">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Location</th>
              <th scope="col">Time</th>
              <th scope="col">DuckCount</th>
              <th scope="col">Food</th>
              <th scope="col">FoodCount</th>
            </tr>
          </thead>
          <tbody>
            <TableData surveyData={this.state.surveyData} />
          </tbody>
        </table>
      </section>
    );
  }
}

export default withRouter(DisplaySurvey);
