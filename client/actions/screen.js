/**
 * micropayments Actions
 */

export const INCREMENT = 'increment@screen';
export const SET_VALUE = 'setValue@screen';
export const RESET = 'reset@screen';

export function increment() {
    return {
        type: INCREMENT,
    };
}

export function setValue(value) {
    return {
        type: SET_VALUE,
        payload: value,
    };
}
export function reset() {
    return {
        type: RESET,
    };
}
