import React, { Component } from 'react'
import {Line} from 'react-chartjs-2'
import {options, initial} from './chartData'
import { connect } from 'react-redux';
import {calculateProfitWithoutTaxes, calculateProfitWithTaxes} from '../../formulas/calculateProfit/calculateProfit'

class MainChart extends Component {
    state = {
        sliderInput: 0,
        options,
        data: initial,
    }

    componentWillMount() {
        const companyData = this.props.pageOneInput
        companyData.turnoverGrowth /= 100
        companyData.profit /= 100
        companyData.taxToConsumer /= 100

        const emissionData = this.props.pageTwoInput

        const profitWithoutTaxes = Object.values(calculateProfitWithoutTaxes(companyData, 5))
        const profitWithTaxes = calculateProfitWithTaxes(companyData, 5) 



        initial.datasets[1].data = profitWithoutTaxes.map(el => el.profitWithoutTax)
        
        console.log(this.state.data)
        // initial.something = calculation output
    }

    render() {
        if(!this.state.data) return 'loading...'
        return (
            <div className='profit-chart'>
                <Line options={this.state.options} data={this.state.data} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    pageOneInput: state.pageOneInput,
    pageTwoInput: state.pageTwoInput
})

export default connect(mapStateToProps)(MainChart)