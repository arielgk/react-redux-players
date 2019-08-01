import {combineReducers} from 'redux';

import players from './playerReducer';
import filters from './filterReducer';
import ajaxStatus from './ajaxStatusReducer';

export default combineReducers({
    players,
    filters,
    ajaxStatus,
});

