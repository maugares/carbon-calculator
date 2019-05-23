import React from 'react'

export const labels = {
    elasticity: {
        position: 'right',
        text: `How price sensitive is your market?`,
        message: <div><p>To indicate how your customers react to a price change we use the price elasticity of demand.</p> <p>Food, for example, tend to be inelastic (between 0 - 1) while luxury goods tend to be elastic (>1)</p></div>
    },
    taxToCustomer: {
        position: 'right',
        text: `What percentage of the carbon tax will be levied to your customer?`,
        message: <div><p>Does the polluter pay?</p><p>Please indicate the percentage of the tax that will be levied on your customer by increasing your price</p></div>
    },
    scope1: {
        position: 'left',
        text: `Scope 1 - Direct emissions`,
        message: <div><p>Direct GHG emissions occur from sources that are owned or controlled by the company, for example, emissions from combustion in owned or controlled boilers, furnaces, vehicles, etc.; emissions from chemical production in owned or controlled process equipment. </p><p> Direct CO2 emissions from the combustion of biomass shall not be included in scope 1 but reported separately.</p></div>,
    },
    scope2: {
        position: 'left',
        text: `Scope 2 - Direct emissions`,
        message: <div><p>Scope 2 accounts for GHG emissions from the generation of purchased electricity consumed by a company. </p><p> Purchased electricity is defined as electricity that is purchased or otherwise brought into the organizational boundary of the company. </p><p> Scope 2 emissions physically occur at the facility where electricity is generated.</p></div>
    },
    scope3: {
        position: 'left',
        text: `Scope 3 - Indirect emissions`,
        message: <div><p>Scope 3 emissions are a consequence of the activities of the company, but occur from sources not owned or controlled by the company. </p><p> Some examples of scope 3 activities are:</p> <ul className='scope3-message'><li>extraction and production of purchased materials</li><li>transportation of purchased fuels</li><li>use of products and services</li></ul></div>
    },
    scope1Box: {
        position: 'left',
        text: `Scope 1 - Direct emissions`,
        message: <div><p>Direct GHG emissions occur from sources that are owned or controlled by the company, for example, emissions from combustion in owned or controlled boilers, furnaces, vehicles, etc.; emissions from chemical production in owned or controlled process equipment. </p><p> Direct CO2 emissions from the combustion of biomass shall not be included in scope 1 but reported separately.</p></div>,
    },
    scope2Box: {
        position: 'left',
        text: `Scope 2 - Direct emissions`,
        message: <div><p>Scope 2 accounts for GHG emissions from the generation of purchased electricity consumed by a company. </p><p> Purchased electricity is defined as electricity that is purchased or otherwise brought into the organizational boundary of the company. </p><p> Scope 2 emissions physically occur at the facility where electricity is generated.</p></div>
    },
    scope3Box: {
        position: 'left',
        text: `Scope 3 - Indirect emissions`,
        message: <div><p>Scope 3 emissions are a consequence of the activities of the company, but occur from sources not owned or controlled by the company. </p><p> Some examples of scope 3 activities are:</p> <ul className='scope3-message'><li>extraction and production of purchased materials</li><li>transportation of purchased fuels</li><li>use of products and services</li></ul></div>
    },
    co2Tax: {
        position: 'box',
        message: <div><p>In this section you can change the CO2 price per ton to see the effect on your profit. </p><p> Tax growth per year is set on 5.5% </p></div>
    },
    companyInfo: {
        position: 'box',
        message: <div><p>Use this tab to see how other industries perform under tax regulation.</p></div>
    },
    marketInfo1: {
        position: 'right',
        text: `How price sensitive is your market?`,
        message: <div><p>Who will pay for the carbon tax? </p><p> Use the first slider to indicate how much of your taxes will be covered by a price increase and payed for by your customer.</p></div>
    },
    marketInfo2: {
        position: 'right',
        text: `What percentage of the carbon tax will be levied to your customer?`,
        message: <div><p>Use the second slider to indicate how price sensitive your consumers are. </p><p> How sensitive are consumers in your market to price?</p></div>
    },
    emissions: {
        position: 'box',
        message: <div><p>Change your emissions, reduction targets or calculate your exact emissions</p></div>
    },
    graphTax: {
        position: 'graph',
        text: `Tax per year`,
        message: <div><p>This graph displayes the total tax that your company has to pay per year</p></div>
    },
    graphEmissions: {
        position: 'graph',
        text: `Taxable emissions`,
        message: <div><p>This graph displayes the total amount of taxable emissions for your company per year</p></div>
    },
    graphProfit: {
        position: 'graph',
        text: 'Profit per year',
        message: <div><p>This graph displayes the total amount profit per year for your company before and after the CO2 tax is deducted</p></div>
    },
    reduction: {
        position: 'reduction',
        text: 'Reduction target in 5 years',
        message: <div><p>Please indicate how much emissions you are planning to reduce in 5 years </p><p> If you do'nt have any reduction targets or plans please leave the value at 0 </p><p> Targets can be changed again in the final step</p></div>
    },
    disclaimer: {
        position: 'disclaimer',
        text: 'No rights can be derived from the information given in this tool',
        message: <div><p>This calculator only provides an indication of the impact of carbon tax on your profit. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the information provided by this calculator. Any reliance you place on such information is therefore strictly at your own risk.</p></div>
    }
}
