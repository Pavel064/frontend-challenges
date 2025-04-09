import { useState } from "react";
import { Counter } from "./challenges/01-counter/Counter";

function App() {
  const [currentChallenge, setCurrentChallenge] = useState<string | null>(
    "counter"
  );
  return (
    <div>
      <h1>React Challenges</h1>

      <div className="nav-block">
        <button
          onClick={() => setCurrentChallenge("counter")}
          className={currentChallenge !== null ? "btn-active" : ""}
        >
          01: Counter
        </button>

        <button className="btn-reset" onClick={() => setCurrentChallenge(null)}>
          Reset
        </button>
      </div>

      <div>{currentChallenge === "counter" && <Counter />}</div>
    </div>
  );
}

export default App;
