export const SUBMIT_INPUT_ONE = 'SUBMIT_INPUT_ONE'

export const submitInputOne = input => ({
    type: SUBMIT_INPUT_ONE,
    payload: input
})

export const SUBMIT_INPUT_TWO = 'SUBMIT_INPUT_TWO'

export const submitInputTwo = input => ({
    type: SUBMIT_INPUT_TWO,
    payload: input

})

export const UPDATE_INPUT = 'UPDATE_INPUT'

export const updateInput = input => ({
    type: UPDATE_INPUT,
    payload: input
})