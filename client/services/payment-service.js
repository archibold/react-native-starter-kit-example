import {
    setDescription as setDescriptionAction,
    setPaymentType as setPaymentTypeAction,
    setPayment as setPaymentAction } from '../actions/payment-actions';


export function setDescription(value) {
    return (dispatch) => {
        dispatch(setDescriptionAction(value));
    };
}
export function setPayment(value) {
    return (dispatch) => {
        dispatch(setPaymentAction(value));
    };
}
export function setPaymentType(value) {
    return (dispatch) => {
        dispatch(setPaymentTypeAction(value));
    };
}
