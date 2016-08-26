import storage from '../utils/Storage';

import { setPayerList as setPayerListAction } from '../actions/payerList-actions';
import { setPaymentList as setPaymentListAction } from '../actions/paymentList-actions';

export function init() {
    return (dispatch) => {
        storage.get('payerList', []).then((payerList) => {
            dispatch(setPayerListAction(payerList));
        });
        storage.get('paymentList', []).then((paymentList) => {
            dispatch(setPaymentListAction(paymentList));
        });
    };
}
