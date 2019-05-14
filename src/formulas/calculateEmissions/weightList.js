import { industry } from './industry'
import { emissionOther } from './emissionOther'

const weightListDefined = [
    {
        industry: industry[0],
        weightS1: 0.50,
        weightS2: 0.05,
        weightS3: 0.45,
        kgPerEuro: 1.76338
    },
    {
        industry: industry[1],
        weightS1: 0.20,
        weightS2: 0.10,
        weightS3: 0.70,
        kgPerEuro: 1.36895
    },
    {
        industry: industry[2],
        weightS1: 0.20,
        weightS2: 0.10,
        weightS3: 0.70,
        kgPerEuro: 0.23852
    },
    {
        industry: industry[3],
        weightS1: 0.05,
        weightS2: 0.05,
        weightS3: 0.90,
        kgPerEuro: 0.70102
    },
    {
        industry: industry[4],
        weightS1: 0.40,
        weightS2: 0.25,
        weightS3: 0.35,
        kgPerEuro: 0.63054
    },
    {
        industry: industry[5],
        weightS1: 0.20,
        weightS2: 0.10,
        weightS3: 0.70,
        kgPerEuro: 1.292
    },
    {
        industry: industry[6],
        weightS1: 0.10,
        weightS2: 0.15,
        weightS3: 0.75,
        kgPerEuro: 0.825
    },
    {
        industry: industry[7],
        weightS1: 0.50,
        weightS2: 0.50,
        weightS3: 0.90,
        kgPerEuro: 2.348
    },
    {
        industry: industry[8],
        weightS1: 0.35,
        weightS2: 0.05,
        weightS3: 0.60,
        kgPerEuro: 0.116
    }
]

const industryOther = {
    industry: industry[9],
    weightS1: 0.20,
    weightS2: 0.10,
    weightS3: 0.70,
    kgPerEuro: emissionOther(weightListDefined)
}

export const weightList = [...weightListDefined, industryOther]
