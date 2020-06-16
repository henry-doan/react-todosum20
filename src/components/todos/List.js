import React from 'react';
import Todo from './Todo';

const List = ({ title, todos, updateTodo }) => (
  <div>
    <h1>{title}</h1> 
    { todos.map( t => <Todo key={t.id} {...t} updateTodo={updateTodo} />) }
  </div>
)

export default List;