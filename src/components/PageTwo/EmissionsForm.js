import React from 'react'

const percs = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

export default function EmissionsForm(props) {
    console.log(props)
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
                            ?<input type="number" name="S1emissions" value={props.values.S1emissions} onChange={props.onChange}/>
                            :<input type="number" name="S1emissions" value={props.values.S1emissions} disabled />
                        }
                    </td>
                    <td>
                        <select name="S1reductionTarget" onChange={props.onChange}>
                            {percs.map(val => <option value={val} key={val}>{val}%</option> )}
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Scope 2 - Direct emissions</td>
                    <td>
                        {props.values.emissionsKnown === 'yes'
                            ?<input type="number" name="S2emissions" value={props.values.S2emissions} onChange={props.onChange}/>
                            :<input type="number" name="S2emissions" value={props.values.S2emissions}  disabled />
                        }
                    </td>
                    <td>
                        <select name="S2reductionTarget" onChange={props.onChange}>
                            {percs.map(val => <option value={val} key={val}>{val}%</option> )}
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Scope 3 - Indirect emissions</td>
                    <td>
                        {props.values.emissionsKnown === 'yes'
                            ?<input type="number" name="S3emissions" value={props.values.S3emissions} onChange={props.onChange}/>
                            :<input type="number" name="S3emissions" value={props.values.S3emissions}  disabled />
                        }
                    </td>
                    <td>
                        <select name="S3reductionTarget" onChange={props.onChange}>
                            {percs.map(val => <option value={val} key={val}>{val}%</option> )}
                        </select>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
