import React, { Component } from 'react'
import './InfoContainer.css'
import CompanyInfoForm from './CompanyInfoForm'
import MarketInfoForm from './MarketInfoForm'
import { connect } from 'react-redux';
import {submitInputOne} from '../../actions/submitInput'
import PageHeader from '../PageHeader'

class InfoContainer extends Component {
    state = {
        industry: '',
        turnover: 0, // euros
        turnoverGrowth: 0, // percentage
        profitMargin: 0, // percentage
        elasticity: 0, // between -2 and 0
        taxToCustomer: 0, // percentage
    }

    onChange = (data, target) => {
        this.setState({ [target]: data })
    }

    onSubmit = () => {
        this.props.submitInputOne(this.state)
        this.props.history.push('/step-2')
    }

    render() {
        return (
            <div className="info container">
                <PageHeader />
                <CompanyInfoForm values={this.state} onChange={this.onChange} />
                <MarketInfoForm values={this.state} onChange={this.onChange} />
                <button onClick={this.onSubmit} className="continue-button"> Continue </button>
            </div>
        )
    }
}

export default connect(null, {submitInputOne})(InfoContainer)