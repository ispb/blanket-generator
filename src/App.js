import logo from './logo.svg';
import './App.css';
import Board from "./components/Board"
import Menu from "./components/Menu"
import { useState } from 'react';

function App() {

  const [x, setX] = useState(10);
  const [y, setY] = useState(10);

  return (
    <div className="App">
      <div className="cloud"></div>
      <div className="Board-container">
        <div className="Box-box">
          <Menu x={x} y={y} setX={setX} setY={setY} />
          <Board x={x} y={y} />
        </div>
      </div>
    </div >
  );
}

export default App;
