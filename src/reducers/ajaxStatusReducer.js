import * as types from '../constants/actionTypes';
import initialState from '../store/initialState';


function actionTypeEndsInSuccess(type) {
    if(type !== null && type !== undefined){
        return type.substring(type.length - 8) === '_SUCCESS';
    }else{
        return false;
    }


}

export default function ajaxStatusReducer(state = initialState.ajaxStatus, action) {
    if (action.type === types.BEGIN_AJAX_CALL) {
        return state + 1;
    } else if (action.type === types.AJAX_CALL_ERROR || actionTypeEndsInSuccess(action.type)) {
        return state - 1;
    }

    return state;
}
