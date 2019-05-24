import React from 'react'
import {dataGraphProfitNT, dataGraphProfitAT} from '../../../formulas/calculateProfit/calculateProfit'
import './tables.css'

export default function profitTable(props) {
    const noTax = dataGraphProfitNT(
        props.companyData, 
        5, 
        "profit",
        "cumulative",
        props.cumulative
    )
    const tax = dataGraphProfitAT(
        props.companyData, 
        props.taxScope, 
        props.taxInfo,
        props.emissionData,
        5,
        "profitAT",
        "cumulativeProfitAT",
        props.cumulative
    )

    return (
        <table class="chart-table">
            <thead>
                <tr>
                    <th></th>
                    <th>Year 1</th>
                    <th>Year 2</th>
                    <th>Year 3</th>
                    <th>Year 4</th>
                    <th>Year 5</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>Without tax</b></td>
                    {
                        noTax.map(el => <td>€{el}</td>)
                    }
                </tr>
                <tr>
                    <td><b>After tax</b></td>
                    {
                        tax.map(el => <td>€{el}</td>)
                    }
                </tr>
                <tr>
                    <td><b>Difference</b></td>{
                        tax.map((el, index) => {
                            return el - noTax[index]
                        }).map(el => <td>€{Math.abs(el)}</td>)
                    } 
                </tr>
            </tbody>
        </table>
    )
}
