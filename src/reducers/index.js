import {combineReducers} from 'redux';

import players from './playerReducer';
import filters from './filterReducer';
import ajaxStatus from './ajaxStatusReducer';

const configureStore =  combineReducers({
    players,
    filters,
    ajaxStatus,
});

export default configureStore;
