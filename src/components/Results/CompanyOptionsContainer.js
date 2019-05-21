import React, { Component } from 'react'
import CompanyOptionsForm from './CompanyOptionsForm'
import {connect} from 'react-redux'
import {submitInputOne} from '../../actions/submitInput'

class CompanyOptionsContainer extends Component {
    state = JSON.parse(sessionStorage.getItem('companyInfo')) || {
        industry: '',
        turnover: 0, // euros
        turnoverGrowth: 0, // percentage
        profitMargin: 0, // percentage
    }

    onChange = (event) => {
        typeof [event.target.value] === 'number'
            ? this.setState({ [event.target.name]: parseInt(event.target.value) })
            : this.setState({ [event.target.name]: event.target.value })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.submitInputOne(this.state)
    }

    render() {
        return (
            <div className="company-options">
                <CompanyOptionsForm onChange={this.onChange} values={this.state} default={this.props.companyData} onSubmit={this.onSubmit} />
            </div>
        )
    }
}

export default connect(null, {submitInputOne})(CompanyOptionsContainer)

