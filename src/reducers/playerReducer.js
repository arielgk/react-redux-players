import * as actionTypes from '../constants/actionTypes';
import initialState from "../store/initialState";


export default (state = initialState.players, action) => {
    switch (action.type) {
        case actionTypes.GET_PLAYER_SUCCESS:
            return Object.assign([], action.players);
        default:
            return state
    }
}
