import { setPage as setPageAction } from '../actions/app';

export function setPage(page) {
    return (dispatch) => {
        dispatch(setPageAction(page));
    };
}
