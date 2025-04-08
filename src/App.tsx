import { useState } from "react";
import { Counter } from "./challenges/01-counter/Counter";

function App() {
  const [currentChallenge, setCurrentChallenge] = useState<string | null>(null);
  return (
    <div>
      <h1>React Challenges</h1>

      <div>
        <button onClick={() => setCurrentChallenge("counter")}>
          01: Counter
        </button>
        <button onClick={() => setCurrentChallenge(null)}>Reset</button>
      </div>

      <div>{currentChallenge === "counter" && <Counter />}</div>
    </div>
  );
}

export default App;
