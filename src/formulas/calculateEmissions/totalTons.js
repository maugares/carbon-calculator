import { weightList } from './weightList'

export const calculateEmissions = (companyInfo) => {
    const { industry, turnover } = companyInfo
    const industryValues = weightList.filter(elm => elm.industry === industry)[0]
    const { kgPerEuro, weightS1, weightS2, weightS3 } = industryValues

    const totalTons = turnover * (kgPerEuro * 0.001)
    const emissionS1 = totalTons * weightS1
    const emissionS2 = totalTons * weightS2
    const emissionS3 = totalTons * weightS3

    const emissions = {
        totalTons,
        emissionS1,
        emissionS2,
        emissionS3
    }

    return emissions
}