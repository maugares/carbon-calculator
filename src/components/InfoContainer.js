import React, { Component } from 'react'
import './InfoContainer.css'

export default class InfoContainer extends Component {
    state = {
        industry: '',
        turnover: 0, // euros
        turnoverGrowth: 0, // percentage
        profit: 0, // percentage
        elasticity: 0, // between -2 and 0
        taxToConsumer: 0, // percentage
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="info container">
                
            </div>
        )
    }
}
