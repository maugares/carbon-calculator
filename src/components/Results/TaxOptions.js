import React from 'react'
import { Slider } from 'antd'
import { Checkbox } from 'antd'
import TextWithTooltip from '../Utils/TextWithTooltip'

export default function TaxOptions(props) {
    const growthValues = []
    for (let i = 0.5; i <= 6.5; i += 0.5) {
        growthValues.push(i)
    }

    return (
        <div className="tax-options">
            <div>
                <TextWithTooltip topic='co2Tax' />
            </div>
            <h2>CO2 Tax</h2>
            <div className="tax-slider-container">
                <p>CO2 tax per ton</p>
                <Slider
                    value={props.values.euroPerTon}
                    min={0}
                    max={250}
                    onChange={e => props.onChange(e, 'euroPerTon')}
                    tipFormatter={val => `€${val}`}
                    marks={{ 0: '0€', 250: '250€' }}
                />
            </div>
            <div className="tax-growth-container">
                <p>Taxable emissions</p>
                <Checkbox.Group
                    options={['Scope 1', 'Scope 2', 'Scope 3']}
                    onChange={e => props.onCheckboxChange(e, 'checked')}
                    value={props.values.checked}
                />
            </div>
        </div>
    )
}
