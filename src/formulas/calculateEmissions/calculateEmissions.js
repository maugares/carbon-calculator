import { weightList } from './weightList'

export const calculateEmissions = (industry, turnover) => {
    console.log(industry)
    const industryValues = weightList.filter(elm => elm.industry === industry)
    const { kgPerEuro, weightS1, weightS2, weightS3 } = industryValues[0]

    const totalTons = turnover * (kgPerEuro * 0.001)
    const emissionS1 = totalTons * weightS1
    const emissionS2 = totalTons * weightS2
    const emissionS3 = totalTons * weightS3

    const emissions = {
        totalTons,
        scope1: emissionS1,
        scope2: emissionS2,
        scope3: emissionS3
    }

    return emissions
}