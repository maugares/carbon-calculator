import {SUBMIT_INPUT_ONE, UPDATE_INPUT} from '../actions/input'

// const defaultState = {
//     industry: "Building materials including wood",
//     turnover: 20000000000,
//     turnoverGrowth: 100, 
//     profitMargin: 10, 
//     elasticity: -0.4, 
//     taxToCustomer: 100, 
// };

const initialState = JSON.parse(sessionStorage.getItem('companyInfo')) || {}

export default (state = initialState, action = {}) => {
    switch(action.type) {
    case SUBMIT_INPUT_ONE:
        sessionStorage.setItem('companyInfo', JSON.stringify({...state, ...action.payload}))
        return {...state, ...action.payload}
    case UPDATE_INPUT:
        return {...state, ...action.payload}
    default:
        return state
    }
}