import React from 'react';

const Todo = ({ id, todosName, complete, updateTodo }) => (
  <li
    style={ complete ? { ...styles.complete } : null }
    onClick={() => updateTodo(id)}
  >
    {todosName}
  </li>
)

const styles = {
  complete: {
    color: 'grey',
    textDecoration: 'line-through',
  }
}

export default Todo;