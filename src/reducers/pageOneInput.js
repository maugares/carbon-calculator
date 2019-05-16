import {SUBMIT_INPUT} from '../actions/submitInput'

const initialState = null;

export default (state = initialState, action = {}) => {
    switch(action.type) {
    case SUBMIT_INPUT:
        return action.payload
    default:
        return state
    }
}