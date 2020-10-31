import logo from './logo.svg';
import './App.css';
import Board from "./components/Board"

function App() {
  return (
    <div className="App">
      <div className="cloud"></div>
      <div className="Board-container">
        <Board x={10} y={10}/>
      </div>
    </div>
  );
}

export default App;
