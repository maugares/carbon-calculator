import React from 'react'

export const labels = {
    elasticity: {
        text: `How price sensitive is your market?`,
        message: <div><p>To indicate how your customers react to a price change we use the price elasticity of demand.</p> <p>Food, for example, tend to be inelastic (between 0 - 1) while luxury goods tend to be elastic (>1)</p></div>
    },
    taxToCustomer: {
        text: `What percentage of the carbon tax will be levied to your customer?`,
        message: <div><p>Does the polluter pay?</p><p>Please indicate the percentage of the tax that will be levied on your customer by increasing your price</p></div>
    },
    scope1: {
        text: `Scope 1 - Direct emissions`,
        message: <div><p>Direct GHG emissions occur from sources that are owned or controlled by the company, for example, emissions from combustion in owned or controlled boilers, furnaces, vehicles, etc.; emissions from chemical production in owned or controlled process equipment. </p><p> Direct CO2 emissions from the combustion of biomass shall not be included in scope 1 but reported separately.</p></div>
    },
    scope2: {
        text: `Scope 2 - Direct emissions`,
        message: <div><p>Scope 2 accounts for GHG emissions from the generation of purchased electricity consumed by a company. </p><p> Purchased electricity is defined as electricity that is purchased or otherwise brought into the organizational boundary of the company. </p><p> Scope 2 emissions physically occur at the facility where electricity is generated.</p></div>
    },
    scope3: {
        text: `Scope 3 - Indirect emissions`,
        message: <div><p>Scope 3 emissions are a consequence of the activities of the company, but occur from sources not owned or controlled by the company. </p><p> Some examples of scope 3 activities are:</p> <ul className='scope3-message'><li>extraction and production of purchased materials</li><li>transportation of purchased fuels</li><li>use of products and services</li></ul></div>
    }
}
