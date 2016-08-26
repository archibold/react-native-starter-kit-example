import {
    setActivePayer as setActivePayerAction,
    setPayerList as setPayerListAction } from '../actions/payerList-actions';
import { setPayer as setPayerAction } from '../actions/payment-actions';
import storage from '../utils/Storage';


export function addNewPayer() {
    return (dispatch, getState) => {
        const { activePayer, payerList } = getState().payerList;

        const newPayerList = payerList;
        newPayerList.splice(0, 0, activePayer);

        dispatch(setPayerListAction(newPayerList));
        dispatch(setActivePayerAction(null));

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

export function pickPayer(payer) {
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

        storage.set('payerList', newPayerList).catch(() => {
            // TODO catch some errors
        });
    };
}
