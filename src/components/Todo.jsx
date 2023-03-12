import React from 'react';

const todos = [];

const Todo = () => {
  return (
    <div>
      <input />
      <button>create</button>
      {todos?.map(({ id, todo }) => (
        <li key={id}>{todo}</li>
      ))}
    </div>
  );
};

export default Todo;
