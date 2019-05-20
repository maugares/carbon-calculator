import React, { Component } from 'react'
import {Line} from 'react-chartjs-2'
import {optionsEuro} from './chartOptions'
import {dataGraphProfitNT, dataGraphProfitAT} from '../../formulas/calculateProfit/calculateProfit'


export default class MainChart extends Component {
    
    render() {
        if(!this.props.emissionData || !this.props.taxInfo || !this.props.companyData) return 'loading'
        return (
            <div className='profit-chart'>
                <h3>Profit Per Year</h3>
                <Line
                    options={optionsEuro}
                    data={
                        {
                            labels: [1, 2, 3, 4, 5],
                            datasets:
                            [
                                {
                                    label: "Profit without tax",
                                    data: dataGraphProfitNT(
                                        this.props.companyData, 
                                        5, 
                                        "profit",
                                        "cumulative",
                                        this.props.cumulative
                                    ).cumulative,
                                    backgroundColor: "rgba(101, 188, 162, 0.3)",
                                    pointBackgroundColor:  "rgba(101, 188, 162, 1)",
                                },
                                {
                                    label: "Profit after tax", //companyInfo, taxScope, taxInfo, emissionsInput, years, profit, cumulative, isCumulative
                                    data: dataGraphProfitAT(
                                        this.props.companyData, 
                                        this.props.taxScope, 
                                        this.props.taxInfo,
                                        this.props.emissionData,
                                        5,
                                        "profitAT",
                                        "cumulativeProfitAT",
                                        this.props.cumulative
                                    ).cumulative,
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