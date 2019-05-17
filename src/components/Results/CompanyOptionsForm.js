import React from 'react'
import {industry} from '../../lib/industry'

export default function CompanyOptionsForm(props) {
    return (
      <>
        <h2>Company Information</h2>
            <form className="company-info-form" onSubmit={props.onSubmit}>
                <div className="form-row">
                    <div className="input-item">
                        <label>Industry</label>
                        <select name="industry" value={props.values.industry} onChange={props.onChange}>
                            <option>-- Choose one --</option>
                            {industry.map(entry => <option key={entry}>{entry}</option>)}
                        </select>
                    </div>
                    <div className="input-item">
                        <label>Annual Turnover (Euro's)</label>
                        <input type="number" name="turnover" value={props.values.turnover} onChange={props.onChange} />
                    </div>
                    <div className="input-item">
                        <label>Annual Turnover Growth (%)</label>
                        <input type="number" name="turnoverGrowth" value={props.values.turnoverGrowth} onChange={props.onChange} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-item">
                        <label>What is your overall profit margin (%)</label>
                        <input type="number" name="profit" value={props.values.profit} onChange={props.onChange} />
                    </div>
                </div>
                <input type="submit" className="continue-button" value="Apply" />
            </form>
        </>
    )
}
