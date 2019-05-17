import {SUBMIT_INPUT_ONE} from '../actions/submitInput'

const initialState = {
    industry: "Building materials including wood"
};

export default (state = initialState, action = {}) => {
    switch(action.type) {
    case SUBMIT_INPUT_ONE:
        return {...state, ...action.payload}
    default:
        return state
    }
}