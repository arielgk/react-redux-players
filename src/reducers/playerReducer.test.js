import * as types from '../constants/actionTypes';

import players from './playerReducer';

describe('Player reducer', () => {
    it('should return the initial state', () => {
        expect(players(undefined, {})).toEqual([])
    });

    it('should handle GET PLAYERS SUCCESS', () => {
        expect(
            players([], {
                type: types.GET_PLAYER_SUCCESS,
                players: [
                    {
                        "contractUntil": "2020-06-30",
                        "dateOfBirth": "1994-04-12",
                        "jerseyNumber": 3,
                        "name": "Eric Bailly",
                        "nationality": "Cote d'Ivoire",
                        "position": "Centre-Back"
                    },
                ]
            })
        ).toEqual([
            {
                "contractUntil": "2020-06-30",
                "dateOfBirth": "1994-04-12",
                "jerseyNumber": 3,
                "name": "Eric Bailly",
                "nationality": "Cote d'Ivoire",
                "position": "Centre-Back"
            },
        ])
    });

});
