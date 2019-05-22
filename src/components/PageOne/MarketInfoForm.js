import React from 'react'
import {Slider, Form} from 'antd'

function percFormatter(value) {
    return `${value}%`
}

export default function MarketInfoForm(props) {
    return (
        <div className="form-container" onSubmit={props.onSubmit}>
            <h2>Market Information</h2>
            <Form>
                <Form.Item style={{width: '45%'}} wrapperCol={{ sm: 24 }}>
                    <label>How price sensitive is your market?</label>
                    <Slider
                        style={{width: '65%'}}
                        value={props.values.elasticity} 
                        onChange={e => props.onChange(e, 'elasticity')}
                        min={-4}
                        max={0}
                        step={0.1}
                        marks={{0: '0', '-4': '-4'}}
                    />
                </Form.Item>
                <Form.Item style={{width: '45%'}} colon={false} wrapperCol={{ sm: 24 }}>
                    <label>What percentage of the carbon tax will be levied to your customer?</label>
                    <Slider
                        style={{width: '65%'}}
                        value={props.values.taxToCustomer} 
                        onChange={e => props.onChange(e, 'taxToCustomer')}
                        tipFormatter={percFormatter} 
                        marks={{0: '0%', 100: '100%'}}
                    />
                </Form.Item>
            </Form>
        </div>
    )
}
