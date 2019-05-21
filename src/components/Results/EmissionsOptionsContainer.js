import React, { Component } from 'react'

export default class EmissionsOptionsContainer extends Component {
    state = JSON.parse(sessionStorage.getItem('companyInfo')) || {
        S1emissions: 0, // tons CO2
        S1reductionTarget: 0, // percentage
        S2emissions: 0, // tons CO2
        S2reductionTarget: 0, // percentage
        S3emissions: 0, // tons CO2
        S3reductionTarget: 0, // percentage
    }

    render() {
        return (
            <div className="emissions-options">
                
            </div>
        )
    }
}
