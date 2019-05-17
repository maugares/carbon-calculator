import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import { optionsEuro } from './chartData'
import { dataGraphProfitNT } from '../../formulas/calculateProfit/calculateProfit'


export default class MainChart extends Component {
    render() {
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
                                        data: dataGraphProfitNT(this.props.companyData, 5, "profit", "cumulative", true),
                                        backgroundColor: "rgba(101, 188, 162, 0.3)",
                                        pointBackgroundColor: "rgba(101, 188, 162, 1)",
                                    }
                                    // {
                                    //     label: "Profit without tax",
                                    //     data: Object.values(calculateProfitWithoutTaxes(this.props.companyData, 5)).map(el => el.profitWithoutTax),
                                    //     backgroundColor: "rgba(69, 168, 72, 0.3)",
                                    //     pointBackgroundColor: "rgba(69, 168, 72, 1)",
                                    //     fill: true,
                                    // }
                                ]
                        }
                    }
                />
            </div>
        )
    }
}