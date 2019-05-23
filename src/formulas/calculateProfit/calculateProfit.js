// Uncomment next to text console.table
// import { companyInfo, taxScope, taxInfo, emissionsInput } from '../../lib/sampleCompany'
import { calculateAnnualValues } from '../calculateTax/yearTaxCalculation'

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
        const yearTurnover = baseTurnover * (1 + turnoverGrowth / 100) ** (year - 1)

        // Calculate the profit for the given year without taxes
        const profit = yearTurnover * profitMargin / 100

        // Get the values for the previous year
        const previousYear = turnoverWithoutTaxes[year - 1]

        // Calculate the cumulative profit for the given interval
        const cumulative = year > 1 ?
            previousYear.cumulative + profit : profit

        // Put the results in an year object
        const returnObject = {
            year,
            yearTurnover,
            profit,
            cumulative
        }

        // Insert the object year object in the general object
        turnoverWithoutTaxes[year] = returnObject
        return null
    })
    return turnoverWithoutTaxes
}

const turnoverWithTaxes = (companyInfo, yearValues, yearArray) => {
    const { profitMargin } = companyInfo
    const turnoverWithTaxes = {}

    // Run for the different years
    yearArray.map(year => {
        const { taxableEmissions, totalTax, scope1, scope2, scope3 } = yearValues[year]

        // Get the values for the previous year
        const previousYear = turnoverWithTaxes[year - 1]

        // Return the turnover after annual growth
        const turnover = year === 1 ? Number(yearValues[year].newTurnover) : Number(yearValues[year].turnover)

        // Calculate the profit for a given year before taxes
        const profitBT = Number(turnover) * Number(profitMargin) / 100

        // Calculate the cumulative profit for the given interval
        const cumulativeProfitBT = year > 1 ?
            Number(previousYear.cumulativeProfitBT) + Number(profitBT) : Number(profitBT)

        // Calculate the cumulative emissions for the given interval
        const cumulativeEmissions = year > 1 ?
            Number(previousYear.cumulativeEmissions) + Number(taxableEmissions) : Number(taxableEmissions)

        // Calculate the profit for a given year after taxes
        const profitAT = Number(profitBT) - Number(totalTax)

        // Calculate the cumulative profit for the given interval
        const cumulativeProfitAT = year > 1 ?
            Number(previousYear.cumulativeProfitAT) + Number(profitAT) : Number(profitAT)

        // Calculate the cumulative co2 tax
        const cumulativeTax = year > 1 ?
            Number(previousYear.cumulativeTax) + Number(totalTax) : Number(totalTax)

        // Add the scopes to the object
        const scope1Cumulative = year > 1 ?
            Number(previousYear.scope1Cumulative) + Number(scope1) : Number(scope1)
        const scope2Cumulative = year > 1 ?
            Number(previousYear.scope2Cumulative) + Number(scope2) : Number(scope2)
        const scope3Cumulative = year > 1 ?
            Number(previousYear.scope3Cumulative) + Number(scope3) : Number(scope3)

        // Put the results in an year object
        const returnObject = {
            year,
            turnover: Number(turnover),
            profitBT: Number(profitBT),
            cumulativeProfitBT: Number(cumulativeProfitBT),
            taxableEmissions: Number(taxableEmissions),
            cumulativeEmissions: Number(cumulativeEmissions),
            totalTax: Number(totalTax),
            profitAT: Number(profitAT),
            cumulativeProfitAT: Number(cumulativeProfitAT),
            cumulativeTax: Number(cumulativeTax),
            scope1: Number(scope1),
            scope1Cumulative: Number(scope1Cumulative),
            scope2: Number(scope2),
            scope2Cumulative: Number(scope2Cumulative),
            scope3: Number(scope3),
            scope3Cumulative: Number(scope3Cumulative),
        }

        // Insert the object year object in the general object
        turnoverWithTaxes[year] = returnObject
        return null
    })

    return turnoverWithTaxes
}

const calculateProfitWithoutTaxes = (companyInfo, years) => {
    const yearArray = getYearArray(years)
    const profitWithoutTaxes = turnoverWithoutTaxes(companyInfo, yearArray)

    return profitWithoutTaxes
}

const calculateProfitWithTaxes = (companyInfo, taxScope, taxInfo, emissionsInput, years) => {
    const yearArray = getYearArray(years)
    const yearValues = calculateAnnualValues(companyInfo, taxScope, taxInfo, emissionsInput, years)
    const profitWithTaxes = turnoverWithTaxes(companyInfo, yearValues, yearArray)

    // console.log('profit with taxes:', profitWithTaxes)

    return profitWithTaxes
}

const createArrays = (profitTable, varNameDiscrete, varNameCumulative, years, isCumulative) => {
    const yearArray = getYearArray(years)
    let profit = []
    let cumulative = []


    yearArray.map(year => {
        profit = [...profit, profitTable[year][varNameDiscrete]]
        cumulative = [...cumulative, profitTable[year][varNameCumulative]]
        return null
    })

    const graphData = isCumulative ? cumulative : profit

    return graphData
}

export const dataGraphProfitNT = (companyInfo, years, profit, cumulative, isCumulative) => {
    if(!companyInfo.turnover) return []
    companyInfo.turnover = parseInt(companyInfo.turnover)
    const profitTable = calculateProfitWithoutTaxes(companyInfo, years)
    const graphData = createArrays(profitTable, profit, cumulative, years, isCumulative)
    
    return graphData
    
}

export const dataGraphProfitAT = (companyInfo, taxScope, taxInfo, emissionsInput, years, profit, cumulative, isCumulative) => {
    if(!companyInfo.turnover) return []
    taxInfo.euroPerTon = parseInt(taxInfo.euroPerTon)
    const profitTable = calculateProfitWithTaxes(companyInfo, taxScope, taxInfo, emissionsInput, years, isCumulative)
    const graphData = createArrays(profitTable, profit, cumulative, years, isCumulative)
    return graphData
}

export const dataGraphCO2Tax = (companyInfo, taxScope, taxInfo, emissionsInput, years, profit, cumulative, isCumulative) => {
    if(!companyInfo.turnover) return []
    const profitTable = calculateProfitWithTaxes(companyInfo, taxScope, taxInfo, emissionsInput, years, isCumulative)
    const graphData = createArrays(profitTable, profit, cumulative, years, isCumulative)

    return graphData
}

export const dataGraphTaxableEmissions = (companyInfo, taxScope, taxInfo, emissionsInput, years, nameProfit, nameCumulative, isCumulative) => {
    const profitTable = calculateProfitWithTaxes(companyInfo, taxScope, taxInfo, emissionsInput, years, isCumulative)
    const graphData = createArrays(profitTable, nameProfit, nameCumulative, years, isCumulative)

    return graphData
}

// To run the following tests, uncomment the first line with imports

// console.table(dataGraphProfitNT(companyInfo, 5, "profit", "cumulative", true))
// console.table(dataGraphProfitNT(companyInfo, 5, "profit", "cumulative", false))
// console.table(dataGraphProfitAT(companyInfo, taxScope, taxInfo, emissionsInput, 5, "profitAT", "cumulativeProfitAT", true))
// console.table(dataGraphCO2Tax(companyInfo, taxScope, taxInfo, emissionsInput, 5, "totalTax", "cumulativeTax", true))
// console.table(dataGraphCO2Tax(companyInfo, taxScope, taxInfo, emissionsInput, 5, "totalTax", "cumulativeTax", false))
// console.table(dataGraphTaxableEmissions(companyInfo, taxScope, taxInfo, emissionsInput, 5, "taxableEmissions", "cumulativeEmissions", true))
// console.table(dataGraphTaxableEmissions(companyInfo, taxScope, taxInfo, emissionsInput, 5, "taxableEmissions", "cumulativeEmissions", false))
