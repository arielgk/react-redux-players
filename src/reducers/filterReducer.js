import * as actionTypes from '../constants/actionTypes';
import initialState from "../store/initialState";

export default (state = initialState.filters, action) => {
    switch (action.type) {
        case actionTypes.FILTER_PLAYERS:
            return Object.assign({},action.filters)
        default:
            return state
    }

}
