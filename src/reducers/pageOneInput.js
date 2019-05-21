import {SUBMIT_INPUT_ONE} from '../actions/submitInput'

const defaultState = {
    industry: "Building materials including wood",
    turnover: 20000000000,
    turnoverGrowth: 100, 
    profitMargin: 10, 
    elasticity: -0.4, 
    taxToCustomer: 100, 
};

const initialState = sessionStorage.getItem('companyInfo') || defaultState

export default (state = initialState, action = {}) => {
    switch(action.type) {
    case SUBMIT_INPUT_ONE:
        sessionStorage.setItem('companyInfo', JSON.stringify({...state, ...action.payload}))
        return {...state, ...action.payload}
    default:
        return state
    }
}