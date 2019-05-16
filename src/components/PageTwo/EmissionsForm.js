import React from 'react'

const percs = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

export default function EmissionsForm(props) {
    return (
        <div className="form-container">
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
                                ?<input type="number" />
                                :<input type="number" value={1000} disabled />
                            }
                        </td>
                        <td>
                            <select>
                                {percs.map(val => <option>{val}%</option> )}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Scope 2 - Direct emissions</td>
                        <td>
                            {props.values.emissionsKnown === 'yes'
                                ?<input type="number" />
                                :<input type="number" value={1000} disabled />
                            }
                        </td>
                        <td>
                            <select>
                                {percs.map(val => <option>{val}%</option> )}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Scope 3 - Indirect emissions</td>
                        <td>
                            {props.values.emissionsKnown === 'yes'
                                ?<input type="number" />
                                :<input type="number" value={1000} disabled />
                            }
                        </td>
                        <td>
                            <select>
                                {percs.map(val => <option>{val}%</option> )}
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
