import React from 'react'

export default function CompanyInfoForm(props) {
    return (
        <div className="company-info-container">
            <h2>Company Information</h2>
            <form className="company-info-form">
                <div className="form row">
                    <div className="input-item">
                        <label>Industry</label>
                        <input />
                    </div>
                    <div className="input-item">
                        <label>Annual Turnover</label>
                        <input />
                    </div>
                    <div className="input-item">
                        <label>Annual Turnover Growth</label>
                        <input />
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-item">
                        <label>What is your overall profit margin</label>
                        <input />
                    </div>
                </div>
            </form>
        </div>
    )
}
