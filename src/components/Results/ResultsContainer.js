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
        taxGrowth: 5.5, // percentage,
        cumulative: true,
        scope1Taxable: true,
        scope2Taxable: true,
        scope3Taxable: true
    }

    onChange = (event) => {
        event.target.type === 'checkbox'
            ? this.setState({ [event.target.name]: !this.state[event.target.name] })
            : this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div className="results-container">
                <div className="options-container">
                    <TaxOptions values={this.state} onChange={this.onChange} />
                    <CompanyOptionsContainer companyData={this.props.companyData} />
                    <MarketOptionsContainer companyData={this.props.companyData} />
                    <EmissionsOptionsContainer emissionsData={this.props.emissionsData} />
                </div>
                <div className="chart-container">
                    <MainChart 
                        taxInfo={this.state} 
                        companyData={this.props.companyData} 
                        emissionData={this.props.emissionData}
                        cumulative={this.state.cumulative}
                        taxScope={{
                            scope1: this.state.scope1Taxable, 
                            scope2: this.state.scope2Taxable,
                            scope3: this.state.scope3Taxable,
                        }} 
                    />
                    <SubCharts 
                        taxInfo={this.state} 
                        companyData={this.props.companyData} 
                        emissionData={this.props.emissionData}
                        cumulative={this.state.cumulative}
                        taxScope={{
                            scope1: this.state.scope1Taxable, 
                            scope2: this.state.scope2Taxable,
                            scope3: this.state.scope3Taxable,
                        }}  
                    />
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