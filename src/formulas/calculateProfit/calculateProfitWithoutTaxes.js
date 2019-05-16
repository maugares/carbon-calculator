import { companyInfo } from '../../lib/sampleCompany'

const yearArray = (years) => {
    const yearArray = []
    for (let year = 1; year <= years; year++) {
        yearArray.push(year)
    }
    return yearArray
}

const turnoverWithoutTaxes = (companyInfo, yearArray) => {
    const { turnover: baseTurnover, turnoverGrowth, profit } = companyInfo

    const profitWT = {}

    yearArray.map(year => {
        const yearTurnover = baseTurnover * (1 + turnoverGrowth) ** (year - 1)
        const profitWithoutTax = yearTurnover * profit
        const profitWTPrev = profitWT[year - 1]

        const cumulative = year > 1 ?
            profitWTPrev.cumulative + profitWithoutTax : profitWithoutTax

        const returnObject = {
            year,
            turnover: yearTurnover,
            profitWithoutTax,
            cumulative
        }
        profitWT[year] = returnObject
    })
    return profitWT
}

console.table(turnoverWithoutTaxes(companyInfo, yearArray(5)))