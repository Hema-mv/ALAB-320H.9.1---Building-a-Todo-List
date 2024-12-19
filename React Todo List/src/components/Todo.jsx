import React, { useState } from 'react';

function Todo({ todo, dispatch }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.title);

  const handleEdit = () => {
    dispatch({ type: 'edit', payload: { id: todo.id, title: editValue } });
    setIsEditing(false);
  };

  return (
    <div>
      <input type="checkbox" checked={todo.completed} onChange={() => dispatch({ type: 'toggle', payload: todo.id })}
      />
      {isEditing ? (
        <input type="text" value={editValue} onChange={(e) => setEditValue(e.target.value)} />
      ) : (<span>{todo.title}</span> )}
      {isEditing ? (
        <button onClick={handleEdit}>Save</button>
      ) : (
        <>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button
            onClick={() => dispatch({ type: 'delete', payload: todo.id })}
            disabled={!todo.completed}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}

export default Todo;
