import { companyInfo, taxScope, taxInfo } from '../../lib/sampleCompany'
import { combineFunctions } from '../calculateTax/yearTaxCalculation'

const getYearArray = (years) => {
    const yearArray = []
    for (let year = 1; year <= years; year++) {
        yearArray.push(year)
    }
    return yearArray
}

const turnoverWithoutTaxes = (companyInfo, yearArray) => {
    const { turnover: baseTurnover, turnoverGrowth, profitMargin } = companyInfo
    const turnoverWithoutTaxes = {}

    // Run for the different years
    yearArray.map(year => {
        // Calculate the annual turnover for the given year
        const yearTurnover = baseTurnover * (1 + turnoverGrowth) ** (year - 1)

        // Calculate the profit for the given year without taxes
        const profitWithoutTax = yearTurnover * profitMargin

        // Get the values for the previous year
        const previousYear = turnoverWithoutTaxes[year - 1]

        // Calculate the cumulative profit for the given interval
        const cumulative = year > 1 ?
            previousYear.cumulative + profitWithoutTax : profitWithoutTax

        // Put the results in an year object
        const returnObject = {
            year,
            yearTurnover,
            profitWithoutTax,
            cumulative
        }

        // Insert the object year object in the general object
        turnoverWithoutTaxes[year] = returnObject
    })
    return turnoverWithoutTaxes
}

const turnoverWithTaxes = (companyInfo, yearValues, yearArray) => {
    const { profitMargin } = companyInfo
    const turnoverWithTaxes = {}

    // Run for the different years
    yearArray.map(year => {
        const { taxableEmissions, totalTax } = yearValues[year]

        // Get the values for the previous year
        const previousYear = turnoverWithTaxes[year - 1]

        // Return the turnover after annual growth
        const turnover = year === 1 ? yearValues[year].newTurnover : yearValues[year].turnover

        // Calculate the profit for a given year before taxes
        const profitBT = turnover * profitMargin

        // Calculate the cumulative profit for the given interval
        const cumulativeProfitBT = year > 1 ?
            previousYear.cumulativeProfitBT + profitBT : profitBT

        // Calculate the cumulative emissions for the given interval
        const cumulativeEmissions = year > 1 ?
            previousYear.cumulativeEmissions + taxableEmissions : taxableEmissions

        // Calculate the profit for a given year after taxes
        const profitAT = profitBT - totalTax

        // Calculate the cumulative profit for the given interval
        const cumulativeProfitAT = year > 1 ?
            previousYear.cumulativeProfitAT + profitAT : profitAT

        // Calculate the cumulative co2 tax
        const cumulativeCO2Tax = year > 1 ? previousYear.cumulativeCO2Tax + totalTax : totalTax

        // Put the results in an year object
        const returnObject = {
            year,
            turnover,
            profitBT,
            cumulativeProfitBT,
            taxableEmissions,
            cumulativeEmissions,
            totalTax,
            profitAT,
            cumulativeProfitAT,
            cumulativeCO2Tax
        }

        // Insert the object year object in the general object
        turnoverWithTaxes[year] = returnObject
    })

    return turnoverWithTaxes
}

export const calculateProfitWithoutTaxes = (companyInfo, years) => {
    const yearArray = getYearArray(years)
    const profitWithoutTaxes = turnoverWithoutTaxes(companyInfo, yearArray)

    return profitWithoutTaxes
}

export const calculateProfitWithTaxes = (companyInfo, taxScope, taxInfo, years) => {
    const yearArray = getYearArray(years)
    const yearValues = combineFunctions(companyInfo, taxScope, taxInfo, years)
    const profitWithTaxes = turnoverWithTaxes(companyInfo, yearValues, yearArray) 

    return profitWithTaxes
}

console.table(calculateProfitWithoutTaxes(companyInfo, 5))
console.table(calculateProfitWithTaxes(companyInfo, taxScope, taxInfo, 5))