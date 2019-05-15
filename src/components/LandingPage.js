import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './LandingPage.css'

export default class LandingPage extends Component {
    render() {
        return (
            <div className="landing-page">
                <h1>Welcome to the Carbon Tax Calculator</h1>
                <h3>Find out what impact carbon taxation has on your company under different scenarios.</h3>
                <Link to="/step-1">
                    <button>Calculate</button>
                </Link>
            </div>
        )
    }
}
