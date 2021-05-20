import React from 'react';
import { useHistory } from 'react-router';

export default function Header(props){
    const history = useHistory();
    const onNewEvent = () => {
        history.push('/new');
    }
    return <div>
        TODO App
        <button onClick={onNewEvent} className="new-event">Create Event</button>
    </div>
}