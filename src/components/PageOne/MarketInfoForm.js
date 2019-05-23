import React from 'react'
import { Slider, Form } from 'antd'
import './MarketInfoForm.css'
import TextWithTooltip from '../Utils/TextWithTooltip';

function percFormatter(value) {
    return `${value}%`
}

export default function MarketInfoForm(props) {
    return (
        <div className="form-container" onSubmit={props.onSubmit}>
            <h2>Market Information</h2>
            <Form>
                <Form.Item style={{width: '100%'}} wrapperCol={{ sm: 12 }}>
                    <TextWithTooltip topic='elasticity'/>
                    <Slider
                        style={{width: '65%'}}
                        value={props.values.elasticity} 
                        onChange={e => props.onChange(e, 'elasticity')}
                        min={-4}
                        max={0}
                        step={0.1}
                        marks={{ '0': 'Inelastic', '-4': 'Elastic' }}
                    />
                </Form.Item>
                <Form.Item style={{width: '100%'}} colon={false} wrapperCol={{ sm: 12 }}>
                    <TextWithTooltip topic='taxToCustomer'/>
                    <Slider
                        style={{width: '65%'}}
                        value={props.values.taxToCustomer} 
                        onChange={e => props.onChange(e, 'taxToCustomer')}
                        tipFormatter={percFormatter} 
                        marks={{ 0: '0%', 100: '100%' }}
                    />
                </Form.Item>
            </Form>
        </div>
    )
}
