import { weightList } from './weightList'


// Function to calculate the emissions in the situation the user DOES NOT KNOW them

export const calculateEmissions = (industry, turnover) => {
    const industryValues = weightList.filter(elm => elm.industry === industry)
    const { kgPerEuro, weightS1, weightS2, weightS3 } = industryValues[0]
    const totalTons = turnover * (kgPerEuro * 0.001)
    const S1emission = totalTons * weightS1
    const S2emission = totalTons * weightS2
    const S3emission = totalTons * weightS3

    const emissions = {
        S1emission,
        S2emission,
        S3emission
    }

    return emissions
}