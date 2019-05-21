import React from 'react'
import { Slider, Tooltip, Icon, Badge } from 'antd'

function percFormatter(value) {
    return `${value}%`
}

const infoMessageElasticity = <div><p>To indicate how your customers react to a price change we use the price elasticity of demand.</p><p>Food, for example, tend to be inelastic (between 0 - 1) while luxury goods tend to be elastic (>1)</p></div>

export default function MarketInfoForm(props) {
    return (
        <div className="form-container" onSubmit={props.onSubmit}>
            <h2>Market Information</h2>
            <form className="info-form">
                <div className="form-row">
                    <div className="slider">
                        <label>
                            <b>How price sensitive is your market?</b>
                            <Tooltip placement="rightTop" title={infoMessageElasticity}>
                                <Icon type="info-circle" />
                            </Tooltip>
                        </label>
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
        </div >
    )
}
