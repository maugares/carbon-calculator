import { companyInfo, marketInfo, taxInfo, taxScope } from '../../lib/sampleCompany'
import { calculateEmissions } from '../calculateEmissions/calculateEmissions'

const scopeEmissions = (companyInfo, taxScope) => {
    const emissions = calculateEmissions(companyInfo)
    const scopes = Object.keys(taxScope)
    let total = 0
    for (let i = 0; i < scopes.length; i++) {
        if (scopes[i]) {
            total += emissions[scopes[i]]
        }
    }
    return total
}

export const yearTaxCalculation = (companyInfo, taxInfo) => {
    const { turnover } = companyInfo
    const { euroPerTon } = taxInfo
    const totalEmissions = scopeEmissions(companyInfo, taxScope)
    const totalTax = euroPerTon * totalEmissions

    const dTurnover = ((totalTax * marketInfo.taxToCustomer) / turnover) * marketInfo.elasticity
    const newQ = turnover * (1 + dTurnover)
    const newP = 1 + (totalTax * marketInfo.taxToCustomer) / turnover
    const newTurnover = newQ * newP

    return newTurnover
}

const taxYears = (companyInfo, taxInfo, years) => {
    const { turnoverGrowth } = companyInfo
    const { euroPerTon: baseTax, taxGrowth } = taxInfo
    const turnoverY1 = yearTaxCalculation(companyInfo, taxInfo)
    const taxYears = {}

    for (let year = 1; year <= years; year++) {
        if (year === 1) {
            taxYears[year] = {
                year,
                euroPerTon: baseTax,
                turnover: turnoverY1,
            }
        } else {
            const baseTax = taxYears[1].euroPerTon
            const newTax = baseTax * (1 + taxGrowth / 100) ** [year - 1]

            const baseTurnover = taxYears[1].turnover
            const newTurnover = baseTurnover * (1 + turnoverGrowth) ** [year - 1]
            // console.log('baseTurnover', baseTurnover, 'turnoverGrowth', turnoverGrowth)

            taxYears[year] = {
                year,
                euroPerTon: newTax,
                turnover: newTurnover,
            }
        }
    }

    return taxYears
}



console.log(taxYears(companyInfo, taxInfo, 5))
