import {
    SET_PAYMENT_LIST,
} from '../actions/paymentList-actions';

export const INITIAL_STATE = {
    paymentList: [],
};

export function paymentListReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_PAYMENT_LIST: return setPaymentList(state, payload);
        default: return state;
    }
}

function setPaymentList(state, payload) {
    return {
        ...state,
        paymentList: payload,
    };
}
