import { useEffect } from 'react';
import { useState } from 'react';

const ToDoForm = ({
  addTodo,
}) => {
  const [text, setText] = useState('');

  console.log('Render - ToDoForm');

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} style={{ fontSize: '20px' }} />
      <button
        style={{ fontSize: '20px' }}
        onClick={() => {
          addTodo(text);
          setText('');
        }}
      >
        Add
      </button>
    </div>
  );
};

const ToDoList = ({ initialTodos = [] }) => {
  // `useState` hooks only run once on initial render. If `initialProps` changes, our `todos` state value
  // won't automatically get updated...we need another hook for that, like `useEffect`
  const [todos, setToDos] = useState(initialTodos);

  // this effect will fire after this component renders IF the `initialTodos` prop changes
  // similar to the react lifecycle method `componentDidUpdate`
  useEffect(() => {
    console.log('useEffect - ToDoList - initialTodos');
    setToDos(initialTodos);
  }, [initialTodos]);

  console.log('Render - ToDoList');

  return (
    <div>
      <ul>
      {todos.map((todo, index) => (
        <li key={`${index}-${todo}`}>{todo}</li>
      ))}
      </ul>
      <ToDoForm addTodo={(newTodo) => setToDos([...todos, newTodo])} />
    </div>
  );
};

export default ToDoList;
