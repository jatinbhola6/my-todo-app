import { initialState } from "../initalState";
import * as ActionTypes from '../Actions/ActionTypes';
export default function eventReducer(store = initialState, action) {
    const todoItems = [...store.todoItems];
    switch(action.type){
        case ActionTypes.ADD_ITEM:
            const maxId = todoItems.reduce((prev, curr) => {
                return curr.id > prev ? curr.id : prev
            }, 0);
            const item = action.data;
            item.id = maxId + 1
            todoItems.push(item);
            break;
        case ActionTypes.DELETE_ITEM:
            const itemIdx = todoItems.findIndex(i => i.id == action.data);
            itemIdx > -1 && todoItems.splice(itemIdx,1);
            break;
        case ActionTypes.ITEM_DONE:
            const currItem = todoItems.find(i => i.id == action.data);
            currItem.isDone = true;
            break;
        case ActionTypes.UPDATE_ITEM:
            const currItemIdx = todoItems.findIndex(i => i.id == action.data.id);
            currItemIdx > -1 && todoItems.splice(currItemIdx,1,action.data);
            break;
    }
    return Object.assign({},store,{todoItems});
}