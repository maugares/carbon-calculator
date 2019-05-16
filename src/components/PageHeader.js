import React from 'react'

export default function PageHeader() {
    return (
        <div className="logo-container">
            <img src={require('../assets/Logo.png')} alt="logo" id="logo" />
            <h4>Carbon Tax Calculator</h4>
        </div>
    )
}
