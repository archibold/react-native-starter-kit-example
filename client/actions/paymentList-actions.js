/**
 * app Actions
 */

export const SET_PAYMENT_LIST = 'setPaymentList@paymentList';

export function setPaymentList(value) {
    return {
        type: SET_PAYMENT_LIST,
        payload: value,
    };
}
