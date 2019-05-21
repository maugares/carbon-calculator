import React from 'react'
import {Select} from 'antd'
import NumericInput from '../Utils/NumericInput'

const Option = Select.Option

const rtSelect = {
    width: '80px'
}

const percs = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

export default function EmissionsForm(props) {
    return (
        <table className="page-two-table">
            <thead>
                <tr>
                    <th></th>
                    <th>CO2 emissions (tons)</th>
                    <th>Reduction target in 5 years</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Scope 1 - Direct emissions</td>
                    <td>
                        {props.values.emissionsKnown === 'yes'
                            ?<NumericInput 
                                maxLength={25} 
                                value={props.values.S1emissions} 
                                onChange={e => props.onChange(e, 'S1emissions')} 
                            />
                            :<NumericInput 
                                value={props.values.S1emissions} 
                                disabled
                            />
                        }
                    </td>
                    <td>
                        <Select 
                            style={rtSelect} 
                            defaultValue="0" 
                            onChange={e => props.onChange(e, 'S1reductionTarget')}
                        >
                            {percs.map(val => <Option value={val} key={val}>{val}%</Option> )}
                        </Select>
                    </td>
                </tr>
                <tr>
                    <td>Scope 2 - Direct emissions</td>
                    <td>
                        {props.values.emissionsKnown === 'yes'
                            ?<NumericInput 
                                maxLength={25} 
                                value={props.values.S2emissions} 
                                onChange={e => props.onChange(e, 'S2emissions')} 
                            />
                            :<NumericInput 
                                value={props.values.S2emissions} 
                                disabled
                            />
                        }
                    </td>
                    <td>
                        <Select 
                            style={rtSelect} 
                            defaultValue="0" 
                            onChange={e => props.onChange(e, 'S2reductionTarget')}
                        >
                            {percs.map(val => <Option value={val} key={val}>{val}%</Option> )}
                        </Select>
                    </td>
                </tr>
                <tr>
                    <td>Scope 3 - Indirect emissions</td>
                    <td>
                        {props.values.emissionsKnown === 'yes'
                            ?<NumericInput 
                                maxLength={25} 
                                value={props.values.S3emissions} 
                                onChange={e => props.onChange(e, 'S3emissions')} 
                            />
                            :<NumericInput 
                                value={props.values.S3emissions} 
                                disabled
                            />
                        }
                    </td>
                    <td>
                        <Select 
                            style={rtSelect} 
                            defaultValue="0" 
                            onChange={e => props.onChange(e, 'S3reductionTarget')}
                        >
                            {percs.map(val => <Option value={val} key={val}>{val}%</Option> )}
                        </Select>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
