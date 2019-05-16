import {SUBMIT_INPUT_TWO} from '../actions/submitInput'

const initialState = null;

export default (state = initialState, action = {}) => {
    switch(action.type) {
    case SUBMIT_INPUT_TWO:
        return action.payload
    default:
        return state
    }
}