import React, { Component } from 'react'
import {Line} from 'react-chartjs-2'
import {optionsEuro} from './chartData'
import {dataGraphProfitNT, dataGraphProfitAT} from '../../formulas/calculateProfit/calculateProfit'


export default class MainChart extends Component {
    
    render() {
        const profitAT = dataGraphProfitAT(
            this.props.companyData, 
            {scope1: true, scope2: true, scope3: true,}, 
            this.props.taxInfo,
            this.props.emissionData,
            5,
            "profitAT",
            "cumulativeProfitAT",
            true
        )
        console.log(profitAT);
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
                                    label: "Profit after tax",
                                    data: dataGraphProfitNT(
                                        this.props.companyData, 
                                        5, 
                                        "profit",
                                        "cumulative",
                                        true
                                    ).cumulative,
                                    backgroundColor: "rgba(101, 188, 162, 0.3)",
                                    pointBackgroundColor:  "rgba(101, 188, 162, 1)",
                                },
                                {
                                    label: "Profit without tax", //companyInfo, taxScope, taxInfo, emissionsInput, years, profit, cumulative, isCumulative
                                    data: dataGraphProfitAT(
                                        this.props.companyData, 
                                        {scope1: true, scope2: true, scope3: true,}, 
                                        this.props.taxInfo,
                                        this.props.emissionData,
                                        5,
                                        "profitAT",
                                        "cumulativeProfitAT",
                                        true
                                    ),
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