import React, { Component } from 'react'
import {Line} from 'react-chartjs-2'
import {options, initial} from './chartData'
import { connect } from 'react-redux';
import {calculateProfitWithoutTaxes, calculateProfitWithTaxes} from '../../formulas/calculateProfit/calculateProfit'

class MainChart extends Component {
    state = {
        options,
        data: initial,

    }

    componentWillMount() {
        const companyData = this.props.pageOneInput

        companyData.turnoverGrowth /= 100
        companyData.profit /= 100
        companyData.taxToConsumer /= 100

        const profitWithoutTaxes = Object.values(calculateProfitWithoutTaxes(companyData, 5)).map(el => el.profitWithoutTax)
        
        this.setState({
            profitWithoutTaxes
        })
    }

    render() {
        if(!this.state.data) return 'loading...'
        console.log(this.props.taxInfo.euroPerTon)
        return (
            <div className='profit-chart'>
                <Line options={this.state.options} data={
                    {
                        labels: [1,2,3,4,5],
                        datasets:
                            [
                                {
                                    label: "Profit after tax",
                                    data: [
                                        1200000*this.props.taxInfo.euroPerTon,
                                        1300000*this.props.taxInfo.euroPerTon,
                                        1400000*this.props.taxInfo.euroPerTon,
                                        1500000*this.props.taxInfo.euroPerTon,
                                        1600000*this.props.taxInfo.euroPerTon
                                    ],
                                    backgroundColor: "rgba(101, 188, 162, 0.3)",
                                    pointBackgroundColor:  "rgba(101, 188, 162, 1)",
                                },
                                {
                                    label: "Profit without tax",
                                    data: Object.values(calculateProfitWithoutTaxes(this.props.pageOneInput, 5)).map(el => el.profitWithoutTax),
                                    backgroundColor: "rgba(69, 168, 72, 0.3)",
                                    pointBackgroundColor:  "rgba(69, 168, 72, 1)",
                                    fill: true,
                                }
                            ]
                    }
                }
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    pageOneInput: state.pageOneInput,
    pageTwoInput: state.pageTwoInput
})

export default connect(mapStateToProps)(MainChart)