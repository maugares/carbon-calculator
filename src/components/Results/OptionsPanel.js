import React from 'react'
import {Collapse, Icon, Slider, Select, Form} from 'antd'
import NumericInput from '../Utils/NumericInput'
import {industry} from '../../lib/industry'

const Panel = Collapse.Panel
const Option = Select.Option

const cog = <Icon type="setting" />

const panelStyle = {
    background: 'rgba(255, 255, 255, 0.64)',
    border: '0'
}

const collapseStyle = {
    background: 'rgba(255, 255, 255, 0.64)',
    border: '0',
    fontSize: '130%',
    textAlign: 'center',
    margin: '10px',
    borderRadius: '0'
}

const formStyle = {
    maxWidth: '400px',
    margin: 'auto'
}

export default function OptionsPanel(props) {
    console.log(cog)
    return (
        <div className="options-panel">
            <Collapse defaultActiveKey={['1']} style={collapseStyle}>
                <Panel header="Company info" extra={cog} style={panelStyle}>
                    <Form style={formStyle}>
                        <Form.Item>
                            <label>Industry</label>
                            <Select defaultValue="Select industry" onChange={e => props.onChange(e, 'industry')}>
                                {industry.map(entry => <Option value={entry} key={entry}>{entry}</Option>)}
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <label>Annual Turnover (Euro's)</label>
                            <NumericInput 
                                maxLength={25} 
                                prefix="€" 
                                value={props.values.turnover} 
                                onChange={e => props.onChange(e, 'turnover')} 
                            />
                        </Form.Item>
                        <Form.Item>
                            <label>Annual Turnover Growth (%)</label>
                            <Slider
                                value={props.values.turnoverGrowth} 
                                onChange={e => props.onChange(e, 'turnoverGrowth')}
                                tipFormatter={val => `${val}%`} 
                            />
                        </Form.Item>
                        <Form.Item>
                            <label>What is your overall profit margin (%)</label>
                            <Slider
                                value={props.values.profitMargin} 
                                onChange={e => props.onChange(e, 'profitMargin')}
                                tipFormatter={val => `${val}%`}
                                marks={{0: '0%', 100: '100%'}}
                            />
                        </Form.Item>
                    </Form>
                </Panel>
            </Collapse>
            <Collapse defaultActiveKey={['1']} style={collapseStyle}>
                <Panel header="Market info" extra={cog} style={panelStyle}>
                    <Form style={formStyle}>
                        <Form.Item>
                            <label>How price sensitive is your market?</label>
                            <Slider
                                value={props.values.elasticity} 
                                onChange={e => props.onChange(e, 'elasticity')}
                                min={-4}
                                max={0}
                                step={0.1}
                            />
                        </Form.Item>
                        <Form.Item>
                            <label>What percentage of the carbon tax will be levied to your customer?</label>
                            <Slider
                                value={props.values.taxToCustomer} 
                                onChange={e => props.onChange(e, 'taxToCustomer')}
                                tipFormatter={val => `${val}%`} 
                            />
                        </Form.Item>
                    </Form>
                </Panel>
            </Collapse>
            <Collapse defaultActiveKey={['1']} style={collapseStyle}>
                <Panel header="Emissions" extra={cog} style={panelStyle}>
                    Some
                </Panel>
            </Collapse>
        </div>
    )
}
