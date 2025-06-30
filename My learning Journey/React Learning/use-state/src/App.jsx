import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(5);

  let increase = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    }
  };

  let decrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <div className="container">
        <div className="count">
          <h1
            style={{ color: counter === 0 || counter === 10 ? "red" : "white" }}
          >
            {counter}
          </h1>
          <button onClick={increase} disabled={counter === 10}>
            Increase Counter
          </button>
          <button onClick={decrease} disabled={counter === 0}>
            Decrease Counter
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
