import * as types from '../constants/actionTypes';
import * as actions from './playerActions';
import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('The players Actions', () => {

    afterEach(() => {
        fetchMock.restore()
    });

    it('should dispatch player fetch actions', () => {

        fetchMock.getOnce('http://football-players-b31f2.firebaseio.com/players.json', {
            body: [
                {
                    "contractUntil": "2022-06-30",
                    "dateOfBirth": "1993-05-13",
                    "jerseyNumber": 9,
                    "name": "Romelu Lukaku",
                    "nationality": "Belgium",
                    "position": "Centre-Forward"
                }
            ],
            headers: {'content-type': 'application/json'}
        })

        const expectedActions = [
            {type: types.BEGIN_AJAX_CALL},
            {
                type: types.GET_PLAYER_SUCCESS, players: [
                    {
                        "contractUntil": "2022-06-30",
                        "dateOfBirth": "1993-05-13",
                        "jerseyNumber": 9,
                        "name": "Romelu Lukaku",
                        "nationality": "Belgium",
                        "position": "Centre-Forward"
                    }
                ]
            }
        ];

        const store = mockStore({players: []});

        return store.dispatch(actions.getPlayers()).then(() => {

            expect(store.getActions()).toEqual(expectedActions)
        })

    })
});
