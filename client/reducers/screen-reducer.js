import {
    CHANGE_ACTION_PANEL,
} from '../actions/screen';

export const INITIAL_STATE = {
    value: false,
};

export function screenReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case CHANGE_ACTION_PANEL: return changeActionPanel(state, payload);
        default: return state;
    }
}

function changeActionPanel(state, payload) {
    return {
        ...state,
        value: payload,
    };
}
