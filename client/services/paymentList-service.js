
import {
    setPaymentList as setPaymentListAction,
} from '../actions/paymentList-actions';
import {
    reset,
} from '../actions/payment-actions';

import storage from '../utils/Storage';

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
