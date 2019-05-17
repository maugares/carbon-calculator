import { companyInfo } from '../../lib/sampleCompany'

const prepareInput = (companyInfo) => {
    companyInfo.turnoverGrowth /= 100
    companyInfo.profitMargin /= 100
    
    return companyInfo
}

console.log(prepareInput(companyInfo))