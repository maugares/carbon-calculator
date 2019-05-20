import {SUBMIT_INPUT_ONE} from '../actions/submitInput'

const initialState = {
    industry: "Building materials including wood",
    turnover: 20000000000,
    turnoverGrowth: 100, 
    profitMargin: 10, 
    elasticity: -0.4, 
    taxToCustomer: 100, 
};

export default (state = initialState, action = {}) => {
    switch(action.type) {
    case SUBMIT_INPUT_ONE:
        return {...state, ...action.payload}
    default:
        return state
    }
}