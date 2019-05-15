import { sampleCompany } from '../../lib/sampleCompany'
import { calculateEmissions } from '../calculateEmissions/calculateEmissions'
import { taxInfo, taxScope } from './taxInfo'


const scopeEmissions = (companyInfo, taxScope) => {
    const emissions = calculateEmissions(sampleCompany)
    const scopes = Object.keys(taxScope)
    let total = 0
    for (let i = 0; i < scopes.length; i++) {
        if (scopes[i]) {
            total += emissions[scopes[i]]
        }
    }
    return total
}

export const yearCalculation = (companyInfo, taxInfo) => {
    const { turnover } = companyInfo
    const { euroPerTon } = taxInfo
    const totalEmissions = scopeEmissions(companyInfo, taxScope)
    const totalTax = euroPerTon * totalEmissions

    return totalTax
}

console.log(yearCalculation(sampleCompany, taxInfo))

