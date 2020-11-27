import React, {Component} from 'react';

class TableData extends Component {
    render() {
        return this.props.surveyData.map((survey) => (
            <tr>
                <td>{survey.firstName}</td>
                <td>{survey.lastName}</td>
                <td>{survey.location}</td>
                <td>{survey.time}</td>
                <td>{survey.duckCount}</td>
                <td>{survey.food}</td>
                <td>{survey.foodCount}</td>
            </tr>
        ));
    }
}

export default TableData;