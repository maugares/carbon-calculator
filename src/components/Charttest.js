import React, { Component } from 'react'
import {Line} from 'react-chartjs-2'
import {data, options} from './data'

export default class Charttest extends Component {
    render() {
        return (
            <div className="chart">
                <Line
                    data={data}
                    options={options}
                />
            </div>
        )
    }
}
