import React from 'react'
import {dataGraphProfitNT, dataGraphProfitAT} from '../../../formulas/calculateProfit/calculateProfit'

export default function profitTable(props) {
    return (
        <table class="demo">
            <caption>Table 1</caption>
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
                    <td>Without tax&nbsp;</td>
                    {
                        dataGraphProfitNT(
                            props.companyData, 
                            5, 
                            "profit",
                            "cumulative",
                            props.cumulative
                        ).map(
                            el => <td>{el}</td>
                        )
                    }
                </tr>
                <tr>
                    <td>After tax</td>
                    {
                        dataGraphProfitAT(
                            this.props.companyData, 
                            this.props.taxScope, 
                            this.props.taxInfo,
                            this.props.emissionData,
                            5,
                            "profitAT",
                            "cumulativeProfitAT",
                            this.props.cumulative
                        ).map(
                            el => <td>{el}</td>
                        )
                    }
                </tr>
                <tr>
                    <td>Difference</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                </tr>
            </tbody>
        </table>
    )
}
