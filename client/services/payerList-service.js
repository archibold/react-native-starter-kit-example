import {
    setAddNewPayer as setAddNewPayerAction,
    setActivePayer as setActivePayerAction } from '../actions/payerList-actions';

export function setAddNewPayer(value) {
    return (dispatch) => {
        dispatch(setAddNewPayerAction(value));
    };
}
export function addNewPayer() {
    return (dispatch, getState) => {
        const { activePayer, payerList } = getState().payerList;
        let newPayerList = [activePayer];
        newPayerList = payerList.splice(0, 0, activePayer);
        dispatch(setAddNewPayerAction(newPayerList));

        // TODO maybe function reset?
        dispatch(setActivePayerAction(''));
        dispatch(setAddNewPayerAction(false));
    };
}

export function setActivePayer(value) {
    return (dispatch) => {
        dispatch(setActivePayerAction(value));
    };
}
