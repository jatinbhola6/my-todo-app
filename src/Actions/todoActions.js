import * as actionTypes from './ActionTypes';
export function addItem(item){
    return (dispatch) => {
        dispatch({ type: actionTypes.ADD_ITEM, data: item});
    }
}
export function deleteItem(itemId){
    return dispatch => {
        dispatch({ type: actionTypes.DELETE_ITEM, data: itemId});
    }
}

export function updateItem(item){
    return dispatch => {
        dispatch({type: actionTypes.UPDATE_ITEM, data: item});
    }
}

export function markItemDone(itemId){
    return dispatch => {
        dispatch({type: actionTypes.ITEM_DONE, data: itemId});
    }
}