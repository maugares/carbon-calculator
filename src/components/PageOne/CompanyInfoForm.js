import React from 'react'
import {industry} from '../../lib/industry'
import {Select, Slider} from 'antd'
import NumericInput from '../Utils/NumericInput'

const Option = Select.Option

function percFormatter(value) {
    return `${value}%`
}

export default function CompanyInfoForm(props) {
    return (
        <div className="form-container">
            <h2>Company Information</h2>
            <form className="company-info-form">
                <div className="form-row">
                    <div className="input-item">
                        <label>Industry</label>
                        <Select defaultValue="Select industry" onChange={e => props.onChange(e, 'industry')}>
                            {industry.map(entry => <Option value={entry} key={entry}>{entry}</Option>)}
                        </Select>
                    </div>
                    <div className="input-item">
                        <label>Annual Turnover (Euro's)</label>
                        <NumericInput 
                            maxLength={25} 
                            prefix="€" 
                            value={props.values.turnover} 
                            onChange={e => props.onChange(e, 'turnover')} 
                        />
                    </div>
                    <div className="input-item">
                        <label>Annual Turnover Growth (%)</label>
                        <Slider
                            value={props.values.turnoverGrowth} 
                            onChange={e => props.onChange(e, 'turnoverGrowth')}
                            tipFormatter={percFormatter} 
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-item">
                        <label>What is your overall profit margin (%)</label>
                        <Slider
                            value={props.values.profitMargin} 
                            onChange={e => props.onChange(e, 'profitMargin')}
                            tipFormatter={percFormatter} 
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}
