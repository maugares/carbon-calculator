import React, { Component } from 'react'
import MainChart from './MainChart'
import TaxOptions from './TaxOptions'
import './Results.css'

export default class ResultsContainer extends Component {
    state = {
        euroPerTon: 50, // euros
        taxGrowth: 5.5 // percentage
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="results-container">
                <div className="options-container">
                    <h2>CO2 Tax</h2>
                    <TaxOptions values={this.state} onChange={this.onChange} />
                </div>
                <div className="chart-container">
                    <h3>Profit per year</h3>
                    <MainChart taxInfo={this.state} />
                </div>
            </div>
        )
    }
}
