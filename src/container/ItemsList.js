import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {deleteItem, markItemDone} from '../Actions/todoActions';
import TodoItem from '../presentational/TodoItem';
class ItemsList extends React.Component{
    editItem = (itemId) => {
        this.props.history.push(`/edit/${itemId}`);
    }
    deleteItem = (itemId) => {
        this.props.deleteItem(itemId)
        this.props.history.replace("/")
    }
    unDoneItems = (items) => {
        return items.filter(item=>!item.isDone).sort((itemA, itemB) => {
            if(itemA.startDate > itemB.startDate) return 1;
            else if (itemA.startDate == itemB.startDate) return 0;
            else return -1
        });
    }
    doneItems = (items) => {
        return items.filter(item => item.isDone).sort((itemA, itemB) => {
            if (itemA.startDate < itemB.startDate) return 1;
            else if (itemA.startDate < itemB.startDate) return 0;
            else return -1
        });
    }
    render(){
        const items = [...this.props.items] || [];
        const sortedArr = [...this.unDoneItems(items), ...this.doneItems(items)];
        return <div>
            {sortedArr.map(item => <TodoItem key={item.id} item={item} editItem={this.editItem} deleteItem={this.deleteItem} markDone={this.props.markItemDone} />)}
        </div>
    }
}
function mapStateToProps(state){
    return {
        items: state.todoItems
    };   
}
function mapDispatchToProps(dispatch){
    return { ...bindActionCreators({ deleteItem, markItemDone },dispatch)}
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);