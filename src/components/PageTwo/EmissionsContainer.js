import React, { Component } from 'react'
import PageHeader from '../PageHeader'
import EmissionsForm from './EmissionsForm'
import {calculateEmissions} from '../../formulas/calculateEmissions/calculateEmissions'
import './EmissionsContainer.css'
import { connect } from 'react-redux';
import {submitInputTwo} from '../../actions/submitInput'

class EmissionsContainer extends Component {
    state = {
        emissionsKnown: "",
        S1emissions: 0, // tons CO2
        S1reductionTarget: 0, // percentage
        S2emissions: 0, // tons CO2
        S2reductionTarget: 0, // percentage
        S3emissions: 0, // tons CO2
        S3reductionTarget: 0, // percentage
    }

    onEmissionsKnownChange = (event) => {
        const emissionsKnown = event.target.value

        if(emissionsKnown === 'yes') {
            this.setState({
                emissionsKnown,
                S1emissions: 0, 
                S2emissions: 0, 
                S3emissions: 0,
            })
        } else if(emissionsKnown === 'no') {
            const {industry, turnover} = this.props.pageOneInput
            const { scope1, scope2, scope3 } = calculateEmissions(industry, turnover)
            this.setState({
                emissionsKnown,
                S1emissions: scope1, 
                S2emissions: scope2, 
                S3emissions: scope3,
            })
        }
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = () => {
        this.props.submitInputTwo(this.state)
        this.props.history.push("/results")
    }

    render() {
        return (
            <div className="container">
                <PageHeader />
                <div className="knows-emissions">
                    <h2>Company CO2 Emissions</h2>
                    Do you know your company CO2 emissions? 
                    <select value={this.state.emissionsKnown} name="emissionsKnown" onChange={this.onEmissionsKnownChange}>
                        <option value=""></option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                {this.state.emissionsKnown && 
                    <div className="form-container">
                        <EmissionsForm values={this.state} onChange={this.onChange} />
                        <button className="continue-button" onClick={this.onSubmit}>Continue</button>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    pageOneInput: state.pageOneInput
})

export default connect(mapStateToProps, {submitInputTwo})(EmissionsContainer)
