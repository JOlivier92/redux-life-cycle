import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {receiveTodos, receiveTodo} from './actions/todo_actions';
import {fetchTodos} from './util/todo_api_util';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  window.fetchTodos = fetchTodos;
  ReactDOM.render(<Root store = {store}/>, root);
});
