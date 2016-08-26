/**
 * App's Redux Reducers
 * --------------------
 *
 * here are listed all the reducers that will compose the state of the app.
 * if you want/need to disable a reducer just comment it out in the exported object.
 */

import { payerListReducer } from './payerList-reducer';
import { paymentReducer } from './payment-reducer';
import { paymentListReducer } from './paymentList-reducer';
/* import new reducer */

export const reducers = {
    payerList: payerListReducer,
    payment: paymentReducer,
    paymentList: paymentListReducer,
    /* append new reducer */
};
