import React from 'react'

export default function TaxOptions(props) {
    const growthValues = []
    for(let i = 0.5; i <= 6.5; i += 0.5) {
        growthValues.push(i)
    }
    return (
        <div className="tax-options">
            <h2>CO2 Tax</h2>
            <div className="tax-slider-container">
                <p>CO2 tax per ton in Euros</p>
                <input type="range" value={props.values.euroPerTon} min={0} max={250} name="euroPerTon" onChange={props.onChange} />
                <p>{props.values.euroPerTon}€</p>
            </div>
            <div className="tax-growth-container">
                <p>Tax price growth p/y</p>
                <select name="taxGrowth" onChange={props.onChange} >
                    {growthValues.map(val => <option value={val} key={val}>{val.toFixed(1)}%</option>)}
                </select>
            </div>
        </div>
    )
}
