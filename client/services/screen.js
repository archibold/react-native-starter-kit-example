import {
    increment as incrementValue,
    reset as resetValue,
    setValue,
} from '../actions/screen';

export function increment() {
    return (dispatch) => {
        dispatch(incrementValue());
    };
}
export function reset() {
    return (dispatch) => {
        dispatch(resetValue());
    };
}

export function changeText(text) {
    return (dispatch, getState) => {
        const state = getState();
        const { value } = state.screen;
        const newValue = value + text;
        dispatch(setValue(newValue));
    };
}
