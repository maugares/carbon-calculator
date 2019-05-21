import React, { Component } from 'react'
import MainChart from './MainChart'
import TaxOptions from './TaxOptions'
import SubCharts from './SubCharts'
import './Results.css'
import { connect } from 'react-redux';

class ResultsContainer extends Component {
    state = {
        euroPerTon: 50, // euros
        taxGrowth: 5.5, // percentage,
        checked: ['Scope 1', 'Scope 2', 'Scope 3'],
        taxScope: { scope1: true, scope2: true, scope3: true }
    }

    onChange = (data, target) => {
        this.setState({ [target]: data })
    }

    onCheckboxChange = (data, target) => {
        const newScope = {scope1: true, scope2: true, scope3: true}

        if(!data.includes('Scope 1')) newScope.scope1 = false
        if(!data.includes('Scope 2')) newScope.scope2 = false
        if(!data.includes('Scope 3')) newScope.scope3 = false

        this.setState({ taxScope: newScope })

        this.onChange(data, target)
    }

    render() {
        return (
            <div className="results-container">
                <div className="options-container">
                    <TaxOptions 
                        values={this.state} 
                        onChange={this.onChange} 
                        onCheckboxChange={this.onCheckboxChange} 
                    />
                </div>
                <div className="chart-container">
                    <MainChart 
                        taxInfo={this.state} 
                        companyData={this.props.companyData} 
                        emissionData={this.props.emissionData}
                        cumulative={this.state.cumulative}
                        taxScope={this.state.taxScope} 
                    />
                    <SubCharts 
                        taxInfo={this.state} 
                        companyData={this.props.companyData} 
                        emissionData={this.props.emissionData}
                        cumulative={this.state.cumulative}
                        taxScope={this.state.taxScope}  
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