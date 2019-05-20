import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'antd'
import './LandingPage.css'

export default class LandingPage extends Component {
    render() {
        return (
            <div className="landing-page">
                <h1>Welcome to the Carbon Tax Calculator</h1>
                <h3>Find out what impact carbon taxation has on your company under different scenarios.</h3>
                <Link to="/step-1">
                    <Button type="primary">Calculate</Button>
                </Link>
            </div>
        )
    }
}
