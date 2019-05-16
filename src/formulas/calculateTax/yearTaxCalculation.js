import { companyInfo, marketInfo, taxInfo, taxScope, reductionInfo } from '../../lib/sampleCompany'
import { calculateEmissions } from '../calculateEmissions/calculateEmissions'

// SCOPE EMISSIONS CALCULATOR DONE
const scopeEmissionsCalculator = (emissions, taxScope) => {
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
const turnoverCalculator = (turnover, taxYear, scopeEmissions, year, oldP) => {
    const {scope1, scope2, scope3, totalTons} = scopeEmissions
    const totalTax = taxYear * totalTons

    const dTurnover = ((totalTax * marketInfo.taxToCustomer) / turnover) * marketInfo.elasticity
    const newQ = turnover * (1 + dTurnover)
    const newP = oldP * (1 + (totalTax * marketInfo.taxToCustomer) / turnover)
    const newTurnover = newQ * newP

    const turnoverInfo = {
        year,
        turnover,
        taxYear,
        scope1,
        scope2,
        scope3,
        taxableEmissions: totalTons,
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

// REDUCED EMISSIONS CALCULATOR DONE
const reducedEmissionsCalculator = (emissions, reduction, year, years) => {
    const keys = Object.keys(emissions)
    const values = Object.values(emissions)
    const reduced = {}
    let total = 0

    for (let i = 1; i < keys.length; i++) {
        const scope = keys[i]
        const yearReduction = (year - 1) / (years - 1)
        const scopeEmissions = values[i] - values[i] * reduction[scope] * yearReduction
        reduced[scope] = scopeEmissions
        total += scopeEmissions
    }

    reduced["totalTon"] = total
    return reduced
}


export const combineFunctions = (companyInfo, taxScope, taxInfo, years) => {
    const { industry, turnover: baseTurnover, turnoverGrowth } = companyInfo
    const baseEmissions = calculateEmissions(industry, baseTurnover)
    const mergedCalculations = {}
    let turnoverForecast

    for (let year = 1; year <= years; year++) {
        if (year === 1) {
            const taxEm = scopeEmissionsCalculator(baseEmissions, taxScope)
            const tax = taxInfo.euroPerTon
            const basePrice = 1
            const turnover = turnoverCalculator(baseTurnover, tax, taxEm, year, basePrice)
            mergedCalculations[year] = turnover
            turnoverForecast = turnoverTaxCalculator(turnover.newTurnover, turnoverGrowth, taxInfo, 5)
        } else {
            const emissions = reducedEmissionsCalculator(baseEmissions, reductionInfo, year, years)
            const taxEm = scopeEmissionsCalculator(emissions, taxScope)
            const taxY = turnoverForecast[year].euroPerTon
            const turnForecY = turnoverForecast[year].newTurnover
            const basePrice = mergedCalculations[year-1].newP
            const turnover = turnoverCalculator(turnForecY, taxY, taxEm, year, basePrice)
            mergedCalculations[year] = turnover
        }
    }
    return mergedCalculations
}

console.table(combineFunctions(companyInfo, taxScope, taxInfo, 5))