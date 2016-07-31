
export const INITIAL_STATE = {
    activePage: 'Payment',
};

import {
    SET_PAGE,
} from '../actions/app';

export function appReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_PAGE: return setPage(state, payload);
        default: return state;
    }
}

function setPage(state, payload) {
    return {
        ...state,
        activePage: payload,
    };
}
