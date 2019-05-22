import React from 'react'
import { Slider, Tooltip, Icon } from 'antd'
import './MarketInfoForm.css'
import TooltipComponent from '../Utils/TooltipComponent';

function percFormatter(value) {
    return `${value}%`
}

const tooltipElasticity = <div><p>To indicate how your customers react to a price change we use the price elasticity of demand.</p><p>Food, for example, tend to be inelastic (between 0 - 1) while luxury goods tend to be elastic (>1)</p></div>
const tooltipTaxToCustomer = <div><p>Does the polluter pay?</p><p>Please indicate the percentage of the tax that will be levied on your customer by increasing your price</p></div>

export default function MarketInfoForm(props) {
    return (
        <div className="form-container" onSubmit={props.onSubmit}>
            <h2>Market Information</h2>
            <form className="info-form">
                <div className="form-row">
                    <div className="slider">
                        {/* <label className="label">
                            <b>How price sensitive is your market?</b>
                            <Tooltip placement="rightTop" title={tooltipElasticity}>
                                <Icon type="info-circle" />
                            </Tooltip>
                        </label> */}
                        <TooltipComponent
                            label='How price sensitive is your market?'
                            tooltip='tooltipElasticity'
                            />
                        <Slider
                            value={props.values.elasticity}
                            onChange={e => props.onChange(e, 'elasticity')}
                            min={-4}
                            max={0}
                            step={0.1}
                        />
                    </div>
                    <div className="slider">
                        <label className="label">
                            <b>What percentage of the carbon tax will be levied to your customer?</b>
                            <Tooltip placement="rightTop" title={tooltipTaxToCustomer}>
                                <Icon type="info-circle" />
                            </Tooltip>
                        </label>
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
