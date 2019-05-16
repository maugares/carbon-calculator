import { companyInfo, marketInfo, taxInfo, taxScope, reductionInfo } from '../../lib/sampleCompany'
import { calculateEmissions } from '../calculateEmissions/calculateEmissions'

const { industry, turnover, turnoverGrowth } = companyInfo

// SCOPE EMISSIONS DONE
const scopeEmissions = (emissions, taxScope) => {
    const scopes = Object.keys(taxScope)
    const scopeEmissions = {}

    let total = 0
    for (let i = 0; i < scopes.length; i++) {
        const scope = scopes[i]
        if (taxScope[scope]) {
            scopeEmissions[scope] = emissions[scope]
            total += emissions[scope]
        } else {
            scopeEmissions[scope] = 0
        }
    }
    scopeEmissions["totalTons"] = total
    return scopeEmissions
}

// TURNOVER CALCULATOR DONE
export const turnoverCalculator = (turnover, taxInfo, totalEmissions, year) => {
    const { euroPerTon } = taxInfo
    const totalTax = euroPerTon * totalEmissions

    const dTurnover = ((totalTax * marketInfo.taxToCustomer) / turnover) * marketInfo.elasticity
    const newQ = turnover * (1 + dTurnover)
    const newP = 1 + (totalTax * marketInfo.taxToCustomer) / turnover
    const newTurnover = newQ * newP

    const turnoverInfo = {
        year,
        taxableEmissions: totalEmissions,
        totalTax,
        dTurnover,
        newQ,
        newP,
        newTurnover
    }

    return turnoverInfo
}

// TURNOVER TAX CALCULATOR DONE
const turnoverTaxCalculator = (turnover, turnoverGrowth, taxInfo, years) => {
    const { euroPerTon: baseTax, taxGrowth } = taxInfo
    const taxYears = {}

    console.log('turnover', turnover)
    console.log('turnoverGrowth', turnoverGrowth)
    console.log('taxInfo', taxInfo)
    console.log('years', years)

    for (let year = 1; year <= years; year++) {
        if (year === 1) {
            taxYears[year] = {
                year,
                euroPerTon: baseTax,
                newTurnover: turnover,
            }
        } else {
            const baseTax = taxYears[1].euroPerTon
            const newTax = baseTax * (1 + taxGrowth / 100) ** [year - 1]

            const baseTurnover = taxYears[1].newTurnover
            const newTurnover = baseTurnover * (1 + turnoverGrowth) ** [year - 1]

            taxYears[year] = {
                year,
                euroPerTon: newTax,
                newTurnover,
            }
        }
    }

    return taxYears
}

const reducedEmissions = (emissions, reduction, year, years) => {
    const keys = Object.keys(emissions)
    const values = Object.values(emissions)
    const reduced = {}
    let total = 0

    for (let i = 1; i < keys.length; i++) {
        const scope = keys[i]
        const yearReduction = (year - 1) / (years - 1)
        const scopeEmissions =  values[i] - values[i] * reduction[scope] * yearReduction
        reduced[scope] = scopeEmissions
        total += scopeEmissions 
    }

    reduced["totalTon"] = total
    return reduced
}

// Year 1
const emissionsY1 = calculateEmissions(industry, turnover)
const taxEmY1 = scopeEmissions(emissionsY1, taxScope)
const turnoverY1 = turnoverCalculator(turnover, taxInfo, taxEmY1.totalTons, 1)
const turnoverTaxY1 = turnoverTaxCalculator(turnoverY1.newTurnover, turnoverGrowth, taxInfo, 1)

// console.log('YEAR 1')
// console.log('emissionsY1:', emissionsY1)
// console.log('taxEmY1:', taxEmY1)
// console.log('turnoverY1:', turnoverY1)
// console.log('turnoverTaxY1:', turnoverTaxY1)


// turnoverForecast

const turnoverForecast = turnoverTaxCalculator(turnoverY1.newTurnover, turnoverGrowth, taxInfo, 5)

console.log('turnoverForecast:', turnoverForecast)

// Year 2
console.log('YEAR 2')
const emissionsY2 = reducedEmissions(emissionsY1, reductionInfo, 2, 5)
const taxEmY2 = scopeEmissions(emissionsY2, taxScope)
const taxY2 = turnoverForecast
const turnoverY2 = turnoverCalculator(turnoverY1, taxY2, taxEmY2.totalTons, 1)

console.log('taxY2:', taxY2)
// console.log('emissionsY2:', emissionsY2)
// console.log('taxEmY2:', taxEmY2)
console.log('turnoverY2:', turnoverY2)

// const totalEmissionsY1 = scopeEmissions(companyInfo, taxScope)

// const taxY1 = yearTaxCalculation(companyInfo, taxInfo, 5)


// console.log(taxEmY1)
