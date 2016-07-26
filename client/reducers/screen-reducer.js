import {
    INCREMENT,
    SET_VALUE,
    RESET,
} from '../actions/screen';

export const INITIAL_STATE = {
    counter: 0,
    value: '',
};

export function screenReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case INCREMENT: return increment(state);
        case SET_VALUE: return setValue(state, payload);
        case RESET: return reset();
        default: return state;
    }
}

function reset() {
    return {
        ...INITIAL_STATE,
    };
}

function increment(state) {
    const { counter } = state;
    const newCounter = counter + 1;
    return {
        ...state,
        counter: newCounter,
    };
}
function setValue(state, payload) {
    return {
        ...state,
        value: payload,
    };
}
