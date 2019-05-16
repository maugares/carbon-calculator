import React, { Component } from 'react'
import PageHeader from '../PageHeader'
import EmissionsForm from './EmissionsForm'
import './EmissionsContainer.css'

export default class EmissionsContainer extends Component {
    state = {
        emissionsKnown: ""
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="container">
                <PageHeader />
                <div className="knows-emissions">
                    <h2>Company CO2 Emissions</h2>
                    Do you know your company CO2 emissions? 
                    <select value={this.state.emissionsKnown} name="emissionsKnown" onChange={this.onChange}>
                        <option value=""></option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                {this.state.emissionsKnown && 
                    <EmissionsForm values={this.state} onChange={this.onChange} />
                }
            </div>
        )
    }
}
