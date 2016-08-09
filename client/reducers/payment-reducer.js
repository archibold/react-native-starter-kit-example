import {
    SET_PAYER,
    SET_PAYMENT,
    SET_DESCRIPTION,
    SET_PAYMENT_TYPE,
    RESET,
} from '../actions/payment-actions';

export const INITIAL_STATE = {
    payer: '',
    payment: '',
    paymentType: 'loaned',
    description: '',
};

export function paymentReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_PAYER: return setPayer(state, payload);
        case SET_PAYMENT: return setPayment(state, payload);
        case SET_PAYMENT_TYPE: return setPaymentType(state, payload);
        case SET_DESCRIPTION: return setDescription(state, payload);
        case RESET: return INITIAL_STATE;
        default: return state;
    }
}

function setPayer(state, payload) {
    return {
        ...state,
        payer: payload,
    };
}

function setPayment(state, payload) {
    return {
        ...state,
        payment: payload,
    };
}
function setPaymentType(state, payload) {
    return {
        ...state,
        paymentType: payload,
    };
}

function setDescription(state, payload) {
    return {
        ...state,
        description: payload,
    };
}
