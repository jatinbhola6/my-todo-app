import './App.css';
import TodoApp from './container/TodoApp';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import eventReducer from './Reducers/EventReducer';
import thunk from 'redux-thunk';
import { initialState } from './initalState';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const store = createStore(eventReducer,initialState,applyMiddleware(thunk))
  return (
      <Provider store={store}>
          <BrowserRouter>
            <TodoApp />
          </BrowserRouter>
      </Provider>
  );
}

export default App;
