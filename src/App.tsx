import React, { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
    setInputValue('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Todo App</h1>
      <form onSubmit={addTodo} className="flex mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new todo"
        />
        <button type="submit" className="bg-blue-500 text-white rounded-r-lg p-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Add
        </button>
      </form>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <img src="https://source.unsplash.com/featured/?nature" alt="Background" className="absolute inset-0 object-cover w-full h-full opacity-30" />
    </div>
  );
}

export default App;
