import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/store.js';
import rootReducer from './reducers/root_reducer';
import allTodos from './reducers/selectors.js';
// import App from './components/app';
import Root from './components/root';
import { receiveTodos, receiveTodo } from './actions/todo_actions';

document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  const store = createStore();
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.allTodos = allTodos;
  ReactDOM.render(
        // <h1>List</h1>,content
        // < App store={store}/>, content
    <Root store={store}/>, content
  );
});
