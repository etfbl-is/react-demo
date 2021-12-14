import { useEffect, useState } from "react";
import { fakeApiCall } from "./api.service";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState([]);
  const onClearData = () => {
    setData([]);
  };
  useEffect(() => {
    setTimeout(() => setCounter(5), 5000);
  }, []);
  useEffect(() => {
    fakeApiCall(counter).then((data) => setData(data));
  }, [counter]);
  return (
    <div>
      <h1
        className="counter-heading"
        style={{ background: "lightblue", color: "grey" }}
      >
        Current count is {counter}
      </h1>
      <div className="counter-input">
        <input
          type="number"
          value={counter}
          onChange={(e) => {
            if (e.target.value) setCounter(parseFloat(e.target.value));
          }}
        />
        <button onClick={() => setCounter(0)}>Reset counter</button>
        <button onClick={() => setCounter(counter + 7)}>+7</button>
      </div>
      <button onClick={onClearData}>Clear Data</button>
      <div
        className="data-container"
        style={{ backgroundColor: "blue", color: "white" }}
      >
        {data.map((element) => (
          <div key={element.id}>{element.value}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
