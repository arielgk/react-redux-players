import * as actionTypes from "../constants/actionTypes";

export const setFilters = (filters) => {

    return {type: actionTypes.FILTER_PLAYERS, filters}

}
