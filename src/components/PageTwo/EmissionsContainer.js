import React, { Component } from 'react'
import PageHeader from '../PageHeader'
import EmissionsForm from './EmissionsForm'
import { calculateEmissions } from '../../formulas/calculateEmissions/calculateEmissions'
import './EmissionsContainer.css'
import { connect } from 'react-redux';
import { submitInputTwo } from '../../actions/submitInput'
import { Radio, Button } from 'antd'

class EmissionsContainer extends Component {
    state = JSON.parse(sessionStorage.getItem('emissionInfo')) || {
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

        if (emissionsKnown === 'yes') {
            this.setState({
                emissionsKnown,
                S1emissions: 0,
                S2emissions: 0,
                S3emissions: 0,
            })
        } else if (emissionsKnown === 'no') {
            const { industry, turnover } = this.props.pageOneInput
            const { S1emissions, S2emissions, S3emissions } = calculateEmissions(industry, turnover)
            this.setState({
                emissionsKnown,
                S1emissions,
                S2emissions,
                S3emissions,
            })
        }
    }

    onChange = (data, target) => {
        this.setState({
            [target]: data
        })
    }

    onSubmit = () => {
        this.props.submitInputTwo(this.state)
        sessionStorage.setItem('emissionInfo', JSON.stringify(this.state))
        this.props.history.push("/results")
    }

    render() {
        return (
            <div className="container">
                <PageHeader />
                <div className="knows-emissions">
                    <h2>Company CO2 Emissions</h2>
                    Do you know your company CO2 emissions?
                    <Radio.Group
                        value={this.state.emissionsKnown}
                        onChange={this.onEmissionsKnownChange}
                        style={{ marginLeft: '5%' }}
                    >
                        <Radio value="yes">Yes</Radio>
                        <Radio value="no">No</Radio>
                    </Radio.Group>
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

const mapStateToProps = state => {
    return { pageOneInput: state.pageOneInput }
}

export default connect(mapStateToProps, { submitInputTwo })(EmissionsContainer)
