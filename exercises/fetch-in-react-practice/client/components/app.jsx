import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    /**
     * Use fetch to send a GET request to `/api/todos`.
     * Then 😉, once the JSON is received and parsed,
     * update state with the received todos.
     */

    fetch('/api/todos')
      .then(response => response.json())
        .then(data => {
          this.setState({ todos: data })
        })
  }

  addTodo(newTodo) {
    /**
     * Use fetch to send a POST request to `/api/todos`.
     * Then 😉, once the JSON is received and parsed,
     * add the created todo to state.
     * Be sure to SERIALIZE the todo in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    }

    fetch('/api/todos', fetchOptions)
      .then(response => response.json())
        .then(resObj => {
          this.getAllTodos();
        })
  }

  toggleCompleted(todoId) {
    /**
     * Use fetch to send a PATCH request to `/api/todos/${todoId}`
     * Then 😉, once the JSON is received and parsed,
     * replace the updated todo in state.
     * Be sure to SERIALIZE the updates in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */
    const update = {};
    let todoItem;
    for (let i = 0; i < this.state.todos.length; i++) {
      if (this.state.todos[i].id === todoId) {
        todoItem = this.state.todos[i];
        update.isCompleted = !todoItem.isCompleted;
      }
    }

    const fetchOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(update)
    }

     fetch(`/api/todos/${todoId}`, fetchOptions)
      .then(response => response.json())
        .then(resObj => {
          this.setState(state => {
            todoItem = resObj;
          })
          this.getAllTodos();
        })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="React Todo"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
