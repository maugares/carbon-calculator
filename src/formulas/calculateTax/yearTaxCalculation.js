import { companyInfo, marketInfo, taxInfo, taxScope } from '../../lib/sampleCompany'
import { calculateEmissions } from '../calculateEmissions/calculateEmissions'

const { industry, turnover, turnoverGrowth } = companyInfo

const scopeEmissions = (industry, turnover, taxScope) => {
    const emissions = calculateEmissions(industry, turnover)
    const scopes = Object.keys(taxScope)

    let total = 0
    for (let i = 0; i < scopes.length; i++) {
        if (scopes[i]) {
            total += emissions[scopes[i]]
        }
    }
    return total
}

export const turnoverCalculator = (turnover, taxInfo, totalEmissions, year) => {
    const { euroPerTon } = taxInfo
    const totalTax = euroPerTon * totalEmissions

    const dTurnover = ((totalTax * marketInfo.taxToCustomer) / turnover) * marketInfo.elasticity
    const newQ = turnover * (1 + dTurnover)
    const newP = 1 + (totalTax * marketInfo.taxToCustomer) / turnover
    const newTurnover = newQ * newP

    return { year, turnover: newTurnover}
}

const turnoverTaxCalculator = (turnover, turnoverGrowth, taxInfo, years) => {
    const { euroPerTon: baseTax, taxGrowth } = taxInfo
    const taxYears = {}

    for (let year = 1; year <= years; year++) {
        if (year === 1) {
            taxYears[year] = {
                year,
                euroPerTon: baseTax,
                turnover,
            }
        } else {
            const baseTax = taxYears[1].euroPerTon
            const newTax = baseTax * (1 + taxGrowth / 100) ** [year - 1]

            const baseTurnover = taxYears[1].turnover
            const newTurnover = baseTurnover * (1 + turnoverGrowth) ** [year - 1]
            console.log('turnoverGrowth', turnoverGrowth)

            taxYears[year] = {
                year,
                euroPerTon: newTax,
                turnover: newTurnover,
            }
        }
    }

    return taxYears
}

// Year 1
const emissionsY1 = scopeEmissions(industry, turnover, taxScope) 
const turnoverY1 = turnoverCalculator(turnover, taxInfo, emissionsY1, 1)
const turnoverTaxY1 = turnoverTaxCalculator(turnover, turnoverGrowth, taxInfo, 5)

console.log(turnoverTaxY1)
// const totalEmissionsY1 = scopeEmissions(companyInfo, taxScope)

// const taxY1 = yearTaxCalculation(companyInfo, taxInfo, 5)


// console.log(taxY1)
