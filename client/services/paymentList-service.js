
import {
    setPaymentList as setPaymentListAction,
} from '../actions/paymentList-actions';
import {
    reset,
} from '../actions/payment-actions';

import storage from '../utils/Storage';

import {
    LOANED,
    BORROWED,
    PAID_FROM,
    PAID_BACK,
} from '../utils/TypeOfPayment';

// TODO move it to payment-service
export function addPayment() {
    return (dispatch, getState) => {
        // TODO payementList.PaymentList incorrect naming!!!
        const { paymentList } = getState().paymentList;
        const { payer, payment, paymentType, description } = getState().payment;
        const dateOfPayment = new Date().toISOString();

        const newPayment = {
            payer,
            payment,
            paymentType,
            description,
            dateOfPayment,
        };

        // Add payment to the top of the list
        // TODO PERFORMANCE is it the fastes way?
        let newPaymentList = [];
        newPaymentList.push(newPayment);
        newPaymentList = newPaymentList.concat(paymentList);

        dispatch(setPaymentListAction(newPaymentList));
        dispatch(reset());

        // save to storage
        storage.set('paymentList', newPaymentList).catch(() => {
            // TODO catch some errors
        });
    };
}
export function payback(index) {
    return (dispatch, getState) => {
        // TODO payementList.PaymentList incorrect naming!!!
        const { paymentList } = getState().paymentList;
        const dateOfPayback = new Date().toISOString();

        let newPaymentType = paymentList[index].paymentType;
        if (newPaymentType === LOANED) {
            newPaymentType = PAID_FROM;
        }
        if (newPaymentType === BORROWED) {
            newPaymentType = PAID_BACK;
        }
        const newPayment = {
            ...paymentList[index],
            paymentType: newPaymentType,
            dateOfPayback,
        };

        // Add payment to the top of the list
        // TODO PERFORMANCE is it the fastes way?
        let newPaymentList = [];
        newPaymentList = newPaymentList.concat(paymentList);
        newPaymentList[index] = newPayment;
        dispatch(setPaymentListAction(newPaymentList));
        dispatch(reset());

        // save to storage
        storage.set('paymentList', newPaymentList).catch(() => {
            // TODO catch some errors
        });
    };
}

export function remove(index) {
    return (dispatch, getState) => {
        const { paymentList } = getState().paymentList;
        let newPaymentList = [];
        newPaymentList = newPaymentList.concat(paymentList);
        newPaymentList.splice(index, 1);

        dispatch(setPaymentListAction(newPaymentList));

        // save to storage
        storage.set('paymentList', newPaymentList).catch(() => {
            // TODO catch some errors
        });
    };
}
