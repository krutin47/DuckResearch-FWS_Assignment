/**
 * @file  Success page component.
 * @author Krutin Trivedi
 */

//importing Components & required Modules
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import TableData from "./TableGenerator";

class DisplaySurvey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      surveyData: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/survey/display")
      .then((res) => {
        if (res.data.length > 0) {
          console.log("<-----Response Data------>");
          console.log(res.data);
          this.setState({ surveyData: res.data });
        } else {
          this.props.history.push("/errorCode400");
        }
      })
      .catch((err) => {
        this.props.history.push("/errorCode400");
      });
  }

  render() {
    return (
      <div className="container-fluid pt-3 pb-5" style={{ height: "100vh" }}>
        <div className="d-flex flex-column justify-content-center align-items-center pt-5 mt-5 px-5">
          <h2 className="pb-4">SURVEY DATA</h2>
          <table className="table table-striped">
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
        </div>
      </div>
    );
  }
}

export default withRouter(DisplaySurvey);
