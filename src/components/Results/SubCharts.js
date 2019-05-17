import React, { Component } from 'react'
import {Line} from 'react-chartjs-2'
import {optionsEuro, options} from './chartData'

export default class SubCharts extends Component {
    render() {
        return (
            <div className="subcharts-container">
                <div className="subchart">
                    <h3>Tax per year</h3>
                    <Line options={optionsEuro} data={
                        {
                            labels: [1,2,3,4,5],
                            datasets:
                            [
                                {
                                    label: "Total CO2 tax",
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
                            ]
                        }
                    } />
                </div>
                <div className="subchart">
                    <h3>Taxable emissions</h3>
                    <Line options={options} data={
                        {
                            labels: [1,2,3,4,5],
                            datasets:
                            [
                                {
                                    label: "Taxable emissions",
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
                            ]
                        }
                    } />
                </div>
            </div>
        )
    }
}
