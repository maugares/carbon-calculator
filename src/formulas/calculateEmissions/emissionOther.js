export const emissionOther = (weightList) => {
    const industryEmission = weightList.map((industries, index, array) => {
        if (index < array.length) {
            return industries.kgPerEuro
        }
        return null
    })

    const emissionOther = industryEmission.reduce(
        (total, emissions, index, array) => {
            total += emissions
            if (index === (array.length - 1)) {
                return total / (array.length)
            } else {
                return total
            }
        })

    return emissionOther
}