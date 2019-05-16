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

            taxYears[year] = {
                year,
                euroPerTon: newTax,
                turnover: newTurnover,
            }
        }
    }

    return taxYears
}

const reducedEmissions = (emissions, reduction, year, years) => {
    const keys = Object.keys(emissions)
    const values = Object.values(emissions)
    const reduced = {}

    for (let i = 1; i < keys.length; i++) {
        const scope = keys[i]
        const yearReduction = (year - 1) / (years - 1)
        reduced[scope] = values[i] - values[i] * reduction[scope] * yearReduction
    }

    console.log('reductionInfo', reductionInfo)
    console.log('keys:', keys)
    console.log('values:', values)
    console.log('reduced:', reduced)
}

// Year 1
const emissionsY1 = calculateEmissions(industry, turnover)
const taxEmY1 = scopeEmissions(emissionsY1, taxScope)
const turnoverY1 = turnoverCalculator(turnover, taxInfo, taxEmY1.totalTons, 1)
const turnoverTaxY1 = turnoverTaxCalculator(turnoverY1.turnover, turnoverGrowth, taxInfo, 1)

console.log('YEAR 1')
// console.log('emissionsY1:', emissionsY1)
// console.log('taxEmY1:', taxEmY1)
console.log('turnoverY1:', turnoverY1)
// console.log('turnoverTaxY1:', turnoverTaxY1)



// turnoverForecast
const turnoverForecast = turnoverTaxCalculator(turnoverY1.turnover, turnoverGrowth, taxInfo, 5)

// Year 2
const emissionsY2 = scopeEmissions(industry, turnoverY1.turnover, taxScope)
// console.log(reducedEmissions(emissionsY1, reductionInfo, 1, 5))

// const totalEmissionsY1 = scopeEmissions(companyInfo, taxScope)

// const taxY1 = yearTaxCalculation(companyInfo, taxInfo, 5)


// console.log(taxEmY1)
