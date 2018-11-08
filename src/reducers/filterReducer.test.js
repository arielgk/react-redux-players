import * as types from '../constants/actionTypes';

import filters from './filterReducer';

describe('Player reducer', () => {
    it('should return the initial state', () => {
        expect(filters(undefined, {})).toEqual({})
    });

    it('should handle SET FILTERS', () => {
        expect(
            filters({}, {
                    type: types.FILTER_PLAYERS,
                    filters: {
                        name: 'name',
                        position: 'position',
                        nationality: 'nationality',
                        age: 27

                    }
                }
            )).toEqual({
                name: 'name',
                position: 'position',
                nationality: 'nationality',
                age: 27
            }
        )

    });

});
