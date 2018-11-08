import * as types from '../constants/actionTypes';
import * as actions from './ajaxStatusActions';

describe('Ajax actions', () => {
    it('should create an action to begin an ajax call', () => {

        const expectedAction = {
            type: types.BEGIN_AJAX_CALL,
        }
        expect(actions.beginAjaxCall()).toEqual(expectedAction);
    });

    it('should create an action to set ajax error', () => {
        const expectedAction = {
            type: types.AJAX_CALL_ERROR,
        };
        expect(actions.ajaxCallError()).toEqual(expectedAction);

    })
});
