const { weightList } = require('./weightList')

const totalTons = (companyInfo) => {
    const { industry, turnover } = companyInfo
    const tonPerEuro = weightList
        .filter(elm => elm.industry === industry)[0]
        .tonPerEuro

    return tonPerEuro * turnover * 0.001
}

const sampleCompany = {
    industry: 'Other',
    turnover: 1000,
    turnoverGrowth: 0.01,
    profit: 0.05
}

module.exports.totalTons = totalTons

