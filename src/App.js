import React, { Component } from 'react';
import List from './components/todos/List';
import TodoForm from './components/todos/TodoForm';
import Footer from './components/todos/Footer';

class App extends Component {
  state = { todos: [
    { id: 1, todosName: 'Learn Rails', complete: true },
    { id: 2, todosName: 'Learn ReactJS', complete: false },
    { id: 3, todosName: 'Graduate', complete: false },
  ],
    filter: 'All'
  }

  setFilter = (filter) => {
    this.setState({ filter })
  }

  getUniqId = () => {
    //NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  addTodo = (incomingTodo) => {
    const { todos } = this.state
    const newTodo = { ...incomingTodo, id: this.getUniqId() }
    this.setState({ todos: [newTodo, ...todos] })
  }

  updateTodo = (id) => {
    const { todos } = this.state
    this.setState({
      todos: todos.map( todo => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          }
        }
        return todo
      })
    })
  }
  // allTodos = () => {
  //   // const todos = this.state.todos
  //   const { todos } = this.state
  //   return todos.map( t => {
  //     return (
  //       <li key={t.id}>{t.todosName}</li>
  //     )
  //   })
  // }

  visibleTodos = () => {
    const { todos, filter } = this.state
    switch(filter) {
      case 'Active':
        return todos.filter( t => !t.complete )
      case 'Complete':
        return todos.filter( t => t.complete )
      default:
        return todos
    }
  }

  render() {
    const { filter } = this.state
    return(
      <div>
        <ul>
          <Footer filter={filter} setFilter={this.setFilter} />
          {/* { this.allTodos() }  */}
          <TodoForm addTodo={this.addTodo} />
          <List title='DPL' todos={this.visibleTodos()} updateTodo={this.updateTodo} />
        </ul>
      </div>
    )
  }
}

export default App;
