import * as actionTypes from '../constants/actionTypes';

import {beginAjaxCall, ajaxCallError} from "./ajaxStatusActions";

export const getPlayers = () => {

    return dispatch => {
        dispatch(beginAjaxCall());
        return fetch('https://football-players-b31f2.firebaseio.com/players.json')
            .then(res => res.json())
            .then(body => {
                dispatch({type: actionTypes.GET_PLAYER_SUCCESS, players: body});
            })
            .catch(error => {
                    dispatch(ajaxCallError());
                    throw error;
                }
            )
    }

};
