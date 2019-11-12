import React, { Component } from 'react'
import './Forecast1Day.css';

export default class Forecast1Day extends Component {

/**
 * "day": 2,
"temperature": 31.6,
"icon": "1",
"description": "Sunny"
**/


    render() {
        return (
            <div className="Forecast1Day">
    <           h5>{this.props.weekDay}</h5>
                <img src={this.props.icon}></img>
                <div><i>{this.props.temperature}</i>{this.props.description}</div>

            </div>
        )
    }
}
