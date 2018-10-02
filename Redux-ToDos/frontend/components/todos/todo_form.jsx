import React from 'react';
import { receiveTodo } from '../../actions/todo_actions';

class TodoForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      id: 6,
      title: 'asdf',
      body: 'asdf'
    };
    this.createTodo = this.createTodo.bind(this);
  }

  uniqueId() {
    return new Date().getTime();
  }

  setValues(title, body) {
    this.setState({id: this.uniqueId(), title: title, body: body});
    debugger;
  }

  createTodo() {
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;
    this.setValues(title,body).then(store.dispatch(receiveTodo(this.state)));
  }

  render() {
    return(
      <form>
        <label htmlFor="title">Title:</label>
        <input id="title" type="text"></input>
        <br/>
        <label htmlFor="body">Body:</label>
        <textarea id="body" rows="4" cols="50"></textarea>
        <button onClick={this.createTodo}>Create Todo</button>
      </form>
    );
  }
}

export default TodoForm;
