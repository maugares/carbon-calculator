import { SUBMIT_INPUT_TWO } from '../actions/submitInput'

const defaultState = {
    emissionsKnown: "no",
    S1emissions: 701020, // tons CO2
    S1reductionTarget: 100, // percentage
    S2emissions: 701020, // tons CO2
    S2reductionTarget: 0, // percentage
    S3emissions: 12618360, // tons CO2
    S3reductionTarget: 100, // percentage
};

const initialState = JSON.parse(sessionStorage.getItem('emissionInfo')) || defaultState

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case SUBMIT_INPUT_TWO:
            sessionStorage.setItem('emissionInfo', JSON.stringify({ ...state, ...action.payload }))
            return action.payload
        default:
            return state
    }
}