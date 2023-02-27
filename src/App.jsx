import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { ReactComponent as Bioreactor } from "./assets/bioreactor.svg";
import "./App.css";
// import { Bioreactor } from "./components/Bioreactor.jsx";
import { ArrowUndo } from "./components/ArrowUndo.jsx";
import { Bio } from "./components/Bio";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div className="bioreactor">
        <Bioreactor key="bioreactor1" />
      </div>
      <div className="arrow">
        <ArrowUndo key="arrow1" />
      </div>
      <div className="bio">
        <Bio key="bio1" />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
