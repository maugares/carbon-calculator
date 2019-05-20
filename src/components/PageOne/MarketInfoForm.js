import React from 'react'

export default function MarketInfoForm(props) {
    return (
        <div className="form-container" onSubmit={props.onSubmit}>
            <h2>Market Information</h2>
            <form className="info-form">
                <div className="form-row">
                    <div className="slider">
                        <label><b>How price sensitive is your market?</b></label>
                        <input type="range" min="-2" max="0" step="0.1" name="elasticity" value={props.values.elasticity} onChange={props.onChange} style={{direction: 'rtl'}} />
                        {props.values.elasticity}
                    </div>
                    <div className="slider">
                        <label><b>What percentage of the carbon tax will be levied to your customer?</b></label>
                        <input type="range" min={0} max={100} name="taxToCustomer" value={props.values.taxToCustomer} onChange={props.onChange} />
                        {props.values.taxToCustomer}%
                    </div>
                </div>
            </form>
        </div>
    )
}
