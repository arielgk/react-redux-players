import * as types from '../constants/actionTypes';
import * as actions from './filterActions';

describe('Filter actions', () => {
    it('should create an action to set a filter', () => {
        const filters = {
            name: 'name',
            position: 'position',
            nationality: 'nationality',
            dateOfBirth: "1990-11-07",
        };

        const expectedAction = {
            type: types.FILTER_PLAYERS,
            filters
        };
        expect(actions.setFilters(filters)).toEqual(expectedAction);
    })
})
