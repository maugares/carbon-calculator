import React, { Component } from 'react'
import PageHeader from '../PageHeader'
import MainChart from './MainChart'

export default class ResultsContainer extends Component {
    render() {
        return (
            <div className="container">
                <PageHeader />
                <MainChart />
            </div>
        )
    }
}
