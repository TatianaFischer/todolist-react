import './App.css';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header>
        <h6>Tatiana Fagundes Fischer</h6>
        <h1>To do List</h1>
      </header>
      <main>
        <TodoList />
      </main>
    </div>
  );
}

export default App;
