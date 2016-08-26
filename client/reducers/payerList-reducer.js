import {
    SET_ACTIVE_PAYER,
    SET_PAYER_LIST,
} from '../actions/payerList-actions';

export const INITIAL_STATE = {
    payerList: [],
    activePayer: null,
};

export function payerListReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_ACTIVE_PAYER: return setActivePayer(state, payload);
        case SET_PAYER_LIST: return setPayerList(state, payload);
        default: return state;
    }
}

function setActivePayer(state, payload) {
    return {
        ...state,
        activePayer: payload,
    };
}
function setPayerList(state, payload) {
    return {
        ...state,
        payerList: payload,
    };
}
