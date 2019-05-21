import React, { Component } from 'react'
import MarketOptionsForm from './MarketOptionsForm'
import { connect } from 'react-redux'

class OptionsContainer extends Component {
    state = {
        elasticity: 0, // between -2 and 0
        taxToConsumer: 0, // percentage
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.submitInputOne(this.state)
    }

    render() {
        return (
            <div className="market-options">
                <MarketOptionsForm onChange={this.onChange} onSubmit={this.onSubmit} values={this.state} default={this.props.companyData} />
            </div>
        )
    }
}

export default connect(null, )(OptionsContainer)