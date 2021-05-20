import React from 'react';
import { EventType } from '../Constants';

export default function TodoItem(props){
    const getDateStr = (ts) => {
        const date = new Date(ts);
        return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    }
    const itemType = Object.keys(EventType).find(e => EventType[e] === props.item.type);
    return <div className={`todo-item ${props.item.isDone ? "is-done" : ""} ${itemType ? "item"+itemType : ""}`}>
        <h3>{props.item.title}</h3>
        <p>{props.item.description}</p>
        <p>From: {getDateStr(props.item.startDate)}</p>
        {props.item.endDate ? <p>To: {getDateStr(props.item.endDate)}</p>:null}
        <button onClick={() => props.editItem(props.item.id)}>Edit</button>
        {props.item.isDone ? null : <button onClick={() => props.markDone(props.item.id)} className="center-align-btn">Mark Done</button>}
        <button onClick={() => props.deleteItem(props.item.id)} className="right-align-btn">Delete</button>
    </div>
}