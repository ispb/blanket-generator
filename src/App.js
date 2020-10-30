import logo from './logo.svg';
import './App.css';
import Board from "./components/Board"

function App() {
  return (
    <div className="App">
      <header className="Board-container">
        <Board x={10} y={10}/>
      </header>
    </div>
  );
}

export default App;
