import { useState, useEffect } from 'react'; 
import './App.css';
import ToDoList from './ToDo';

function App() {
  const [todos, setTodos] = useState();

  // the empty dependency list here means this effect will only run once on initial render
  // similar to the react lifecycle method `componentDidMount()`
  useEffect(() => {
    console.log('App - useEffect - start loading');
    setTimeout(() => {
      console.log('App - useEffect - done loading');
      setTodos(['One', 'Two']);
    }, 2000);
  }, []);

  console.log('Render - App');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hooks Review - ToDo App</h1>
        {todos == null && (<div>Loading...</div>)}
        {todos != null && (
          <div>
            <button style={{ fontSize: '20px', marginRight: '6px' }} onClick={() => setTodos(['One', 'Two'])}>Cancel changes</button>
            <button style={{ fontSize: '20px' }} onClick={() => setTodos([])}>Clear todos</button>
            <section>
              <ToDoList initialTodos={todos} />
            </section>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
