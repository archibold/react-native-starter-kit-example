/**
 * app Actions
 */

export const SET_ADD_NEW_PAYER = 'setAddNewPayer@payerList-service';
export const SET_ACTIVE_PAYER = 'setActivePayer@payerList-service';
export const SET_PAYER_LIST = 'setPayerList@payerList-service';

export function setAddNewPayer(value) {
    return {
        type: SET_ADD_NEW_PAYER,
        payload: value,
    };
}

export function setActivePayer(value) {
    return {
        type: SET_ACTIVE_PAYER,
        payload: value,
    };
}
export function setPayerList(value) {
    return {
        type: SET_PAYER_LIST,
        payload: value,
    };
}
