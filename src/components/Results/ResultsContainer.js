import React, { Component } from 'react'
import MainChart from './MainChart'
import TaxOptions from './TaxOptions'
import SubCharts from './SubCharts'
import './Results.css'
import { connect } from 'react-redux';
import CompanyOptionsContainer from './CompanyOptionsContainer'
import MarketOptionsContainer from './MarketOptionsContainer'
import EmissionsOptionsContainer from './EmissionsOptionsContainer'

class ResultsContainer extends Component {
    state = {
        euroPerTon: 50, // euros
        taxGrowth: 5.5, // percentage
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="results-container">
                <TaxOptions values={this.state} onChange={this.onChange} />
                <CompanyOptionsContainer />
                <MarketOptionsContainer />
                <EmissionsOptionsContainer />
                <div className="chart-container">
                    <MainChart taxInfo={this.state} companyData={this.props.companyData} emissionData={this.props.emissionData} />
                    <SubCharts taxInfo={this.state} companyData={this.props.companyData} emissionData={this.props.emissionData} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    companyData: state.pageOneInput,
    emissionData: state.pageTwoInput
})

export default connect(mapStateToProps)(ResultsContainer)