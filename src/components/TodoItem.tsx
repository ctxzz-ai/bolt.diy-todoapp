import React, { useState } from 'react';
import { CheckCircle, Trash2 } from 'lucide-react';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  const [editText, setEditText] = useState(todo.text);

  const handleInputChange = (e) => {
    console.log("Input changed:", e.target.value); // 追加
    setEditText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // ここでtodoを更新するロジックを追加
      // 例: updateTodo(todo.id, editText);
    }
  };

  return (
    <li className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="mr-2"
        />
        <input
          type="text"
          value={editText}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className={`flex-1 ${todo.completed ? 'line-through' : ''}`}
        />
      </div>
      <button onClick={() => deleteTodo(todo.id)} className="text-red-500">
        <Trash2 />
      </button>
    </li>
  );
};

export default TodoItem;
