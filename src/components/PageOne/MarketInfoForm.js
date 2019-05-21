import React from 'react'
import {Slider} from 'antd'

function percFormatter(value) {
    return `${value}%`
}

export default function MarketInfoForm(props) {
    return (
        <div className="form-container" onSubmit={props.onSubmit}>
            <h2>Market Information</h2>
            <form className="info-form">
                <div className="form-row">
                    <div className="slider">
                        <label><b>How price sensitive is your market?</b></label>
                        <Slider
                            value={props.values.elasticity} 
                            onChange={e => props.onChange(e, 'elasticity')}
                            min={-4}
                            max={0}
                            step={0.1}
                        />
                    </div>
                    <div className="slider">
                        <label><b>What percentage of the carbon tax will be levied to your customer?</b></label>
                        <Slider
                            value={props.values.taxToCustomer} 
                            onChange={e => props.onChange(e, 'taxToCustomer')}
                            tipFormatter={percFormatter} 
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}
