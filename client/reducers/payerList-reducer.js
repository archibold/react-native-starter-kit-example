import {
    SET_ADD_NEW_PAYER,
    SET_ACTIVE_PAYER,
    SET_PAYER_LIST,
} from '../actions/payerList-actions';

export const INITIAL_STATE = {
    payerList: [],
    isAddPayer: false,
    activePayer: '',
};

export function payerListReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_ADD_NEW_PAYER: return setAddNewPayer(state, payload);
        case SET_ACTIVE_PAYER: return setActivePayer(state, payload);
        case SET_PAYER_LIST: return setPayerList(state, payload);
        default: return state;
    }
}

function setAddNewPayer(state, payload) {
    return {
        ...state,
        isAddPayer: payload,
    };
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
