import React, { useReducer, useState,useEffect } from 'react';
import Todo from './components/Todo';

const initialState = [
  // Initial todo items can go here
];

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return [{ ...action.payload }, ...state];
    case 'delete':
      return state.filter((todo) => todo.id !== action.payload);
    case 'toggle':
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case 'edit':
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, title: action.payload.title } : todo
      );
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      const newTodoItem = {
        id: Date.now(),
        title: newTodo,
        completed: false
      };
      dispatch({ type: 'add', payload: newTodoItem });
      setNewTodo('');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo"
        />
        <button type="submit">Add</button>
      </form>
      <div>
        {state.map((todo) => (
          <Todo key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
}

export default App;
