import React from 'react'
import { Slider } from 'antd'
import './MarketInfoForm.css'
import TextWithTooltip from '../Utils/TextWithTooltip';

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
                        <TextWithTooltip topic='elasticity' position='right'/>
                        <Slider
                            value={props.values.elasticity}
                            onChange={e => props.onChange(e, 'elasticity')}
                            min={-4}
                            max={0}
                            step={0.1}
                        />
                    </div>
                    <div className="slider">
                        <TextWithTooltip topic='taxToCustomer' position='right'/>
                        <Slider
                            value={props.values.taxToCustomer}
                            onChange={e => props.onChange(e, 'taxToCustomer')}
                            tipFormatter={percFormatter}
                        />
                    </div>
                </div>
            </form>
        </div >
    )
}
