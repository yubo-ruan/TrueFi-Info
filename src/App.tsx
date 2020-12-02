import React from 'react';
import { TodoListItem } from './Todolist';

const todos = [{text: "eat dinner", complete: false}]


function App() {
  return (
    <TodoListItem todo = {todos[0]}/>
  );
}

export default App;
