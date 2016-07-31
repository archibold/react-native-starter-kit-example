/**
 * app Actions
 */

export const SET_PAGE = 'setPage@app';

export function setPage(value) {
    return {
        type: SET_PAGE,
        payload: value,
    };
}
