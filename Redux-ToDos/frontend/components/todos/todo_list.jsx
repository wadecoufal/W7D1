import React from 'react';
import TodoListItem from './todo_list_item'
import TodoForm from './todo_form'


const TodoList = ( { todos, receiveTodo }) => (

  <section>
    <h1>Todo List</h1>
    <ul>
      {todos.map( (todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </ul>
    <TodoForm />
  </section>
);

export default TodoList;
