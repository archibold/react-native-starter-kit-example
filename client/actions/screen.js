/**
 * micropayments Actions
 */

export const CHANGE_ACTION_PANEL = 'onChangeActionPanel@screen';

export function changeActionPanel(value) {
    return {
        type: CHANGE_ACTION_PANEL,
        payload: value,
    };
}
