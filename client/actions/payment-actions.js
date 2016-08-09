/**
 * app Actions
 */

export const SET_PAYER = 'setPayer@payment';
export const SET_PAYMENT = 'setPayment@payment';
export const SET_PAYMENT_TYPE = 'setPaymentType@payment';
export const SET_DESCRIPTION = 'setDescription@payment';
export const RESET = 'reset@payment';

export function reset() {
    return {
        type: RESET,
    };
}
export function setPayer(value) {
    return {
        type: SET_PAYER,
        payload: value,
    };
}

export function setPayment(value) {
    return {
        type: SET_PAYMENT,
        payload: value,
    };
}
export function setPaymentType(value) {
    return {
        type: SET_PAYMENT_TYPE,
        payload: value,
    };
}

export function setDescription(value) {
    return {
        type: SET_DESCRIPTION,
        payload: value,
    };
}
