import {
    setAddNewPayer as setAddNewPayerAction,
    setActivePayer as setActivePayerAction,
    setPayerList as setPayerListAction } from '../actions/payerList-actions';
import { setPayer as setPayerAction } from '../actions/payment-actions';
import storage from '../utils/Storage';


export function setAddNewPayer(value) {
    return (dispatch) => {
        dispatch(setAddNewPayerAction(value));
    };
}
export function addNewPayer() {
    return (dispatch, getState) => {
        const { activePayer, payerList } = getState().payerList;
        const newPayerList = payerList;
        newPayerList.splice(0, 0, activePayer);

        dispatch(setPayerListAction(newPayerList));
        // TODO maybe function reset?
        // what about payer reducer to keep payer in one place?
        dispatch(setActivePayerAction(''));
        dispatch(setAddNewPayerAction(false));

        // save to storage
        storage.set('payerList', newPayerList).catch(() => {
            // TODO catch some errors
        });
    };
}

export function setActivePayer(value) {
    return (dispatch) => {
        dispatch(setActivePayerAction(value));
    };
}

export function setPayer(payer) {
    return (dispatch) => {
        dispatch(setPayerAction(payer));
    };
}

export function removePayerAtIndex(index) {
    return (dispatch, getState) => {
        const { payerList } = getState().payerList;
        let newPayerList = [];
        newPayerList = newPayerList.concat(payerList);
        newPayerList.splice(index, 1);

        dispatch(setPayerListAction(newPayerList));

        // save to storage
        storage.set('payerList', newPayerList).catch(() => {
            // TODO catch some errors
        });
    };
}
