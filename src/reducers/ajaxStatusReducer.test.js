import * as types from '../constants/actionTypes';

import ajaxStatus from './ajaxStatusReducer';

describe('ajaxStatus reducer', () => {
    it('should return the initial state', () => {
        expect(ajaxStatus(undefined, {})).toEqual(0)
    });

    it('should handle BEGIN AJAX CALL', () => {
        expect(
            ajaxStatus(0, {
                type: types.BEGIN_AJAX_CALL,
            })
        ).toEqual(1)
    });
    it('should handle AJAX CALL ERROR', () => {
        expect(
            ajaxStatus(1, {
                type: types.AJAX_CALL_ERROR,
            })
        ).toEqual(0)
    });
    it('should handle any action ending with_SUCCESS', () => {
        expect(
            ajaxStatus(1, {
                type: types.GET_PLAYER_SUCCESS,
            })
        ).toEqual(0)
    });
});
