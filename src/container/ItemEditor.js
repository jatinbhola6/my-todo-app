import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { EventType } from '../Constants';
import { addItem, updateItem}  from '../Actions/todoActions'
class ItemEditor extends React.Component{
    constructor(props){
        super(props)
        this.resetState = {
            itemId: null,
            itemTitle: "",
            itemDescription: "",
            itemStartDate: "",
            itemEndDate: "",
            itemType: Object.keys(EventType)[0]
        }
        this.state = Object.assign({},this.resetState)
    }
    static toDateTimeLocal = (date) => {
        const ten = (i) => (i<10 ? '0' : '') + i;
        return `${ten(date.getFullYear())}-${ten(date.getMonth()+1)}-${ten(date.getDate())}T${ten(date.getHours())}:${ten(date.getMinutes())}`;
    }
    static getDerivedStateFromProps(nextProps, prevState){
        if (nextProps.match.params.id && nextProps.match.params.id != prevState.itemId) {
            const item = nextProps.items.find(item => item.id == nextProps.match.params.id)
            return item ? {
                itemId: item.id,
                itemTitle: item.title,
                itemDescription: item.description,
                itemStartDate: ItemEditor.toDateTimeLocal(new Date(item.startDate)),
                itemEndDate: ItemEditor.toDateTimeLocal(new Date(item.endDate)),
                itemType: Object.keys(EventType).find(e => EventType[e] === item.type)
            } : {};
        }
        else if (!nextProps.match.params.id && prevState.itemId) return Object.assign({},this.resetState);
        else return {}
    }
    handleFieldChange = (event)=>{
        console.log(event.target.value)
        switch(event.target.id){
            case "itemStartDate":
            case "itemEndDate":
                this.setState({ [event.target.id]: event.target.value});
                break;
            default:
                this.setState({ [event.target.id]: event.target.value });
        }
    }
    saveItem = () => {
        const item = {
            id: this.state.itemId,
            title: this.state.itemTitle,
            description: this.state.itemDescription,
            startDate: (new Date(this.state.itemStartDate)).getTime(),
            endDate: (new Date(this.state.itemEndDate)).getTime(),
            type: EventType[this.state.itemType]
        }
        if(this.state.itemId) this.props.updateItem(item)
        else{
            this.props.addItem(item);
            this.setState(Object.assign({},this.resetState));
        }
    }
    backToHome =() =>{
        this.props.history.push("/");
    }
    render(){
        return <div>
            <h2>Item Editor</h2>
            <div>
                <div>
                    <label>Title:</label>
                    <input id="itemTitle" onChange={this.handleFieldChange} type="text" value={this.state.itemTitle} />
                </div>
                <div>
                    <label>Description:</label>
                    <input id="itemDescription" onChange={this.handleFieldChange} type="text" value={this.state.itemDescription} />
                </div>
                <div>
                    <label>Start Date:</label>
                    <input id="itemStartDate" onChange={this.handleFieldChange} type="datetime-local" value={this.state.itemStartDate} />
                </div>
                <div>
                    <label>End Date:</label>
                    <input id="itemEndDate" onChange={this.handleFieldChange} type="datetime-local" value={this.state.itemEndDate} />
                </div>
                <div>
                    <label>Type:</label>
                    <select id="itemType" onChange={this.handleFieldChange} value={this.state.itemType}>
                        {Object.keys(EventType).map(e=><option key={EventType[e]}>{e}</option>)}
                    </select>
                </div>
                <button onClick={this.saveItem}>Save</button>
                <button onClick={this.backToHome}>Back</button>
            </div>
        </div>
    }
}

function mapStateToProps(state){
    return {items: state.todoItems}
}
function mapDispatchToProps(dispatch){
    return { ...bindActionCreators({ addItem, updateItem },dispatch)};
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemEditor);