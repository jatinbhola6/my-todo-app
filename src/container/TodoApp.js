import React from 'react';
import { Route, Switch } from 'react-router';
import Header from '../presentational/Header';
import ItemEditor from './ItemEditor';
import ItemsList from './ItemsList';

class TodoApp extends React.Component{
    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <Header />
                </header>
                <aside className="Event-List">
                    <Route path='/' component={ItemsList} />
                </aside>
                <section className="Main-section">
                    <Switch>
                        <Route exact path="/new" component={ItemEditor} />
                        <Route path="/edit/:id" component={ItemEditor} />
                    </Switch>
                </section>
            </div>
        );
    }
}

export default TodoApp;