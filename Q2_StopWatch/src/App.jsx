import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [run, setRun] = useState(false);

  useEffect(() => {
    let id;

    if (run) {
      id = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(id);
  }, [run]);

  const hours = String(Math.floor(time / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");

  return (
    <>
      <h2>Q2. Stopwatch</h2>

      <h1>
        {hours}:{minutes}:{seconds}
      </h1>

      <button onClick={() => setRun(true)}>Start</button>
      <button onClick={() => setRun(false)}>Stop</button>

      <button
        onClick={() => {
          setRun(false);
          setTime(0);
        }}
      >
        Reset
      </button>
    </>
  );
}

export default App;