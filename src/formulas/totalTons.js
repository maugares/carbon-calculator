const { weightList } = require('./weightList')
const { sampleCompany } = require('./sampleCompany')

module.exports.totalTons = (companyInfo) => {
    const { industry, turnover } = companyInfo
    const tonPerEuro = weightList
        .filter(elm => elm.industry === industry)[0]
        .tonPerEuro

    return tonPerEuro * turnover * 0.001
}

console.log(`Total tons for sample company: ${sampleCompany}`)

