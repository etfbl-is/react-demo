import { useEffect, useState } from "react";
import { fakeApiCall, getCities } from "./api.service";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState([]);
  const [countries] = useState([
    {
      id: "BIH",
      name: "Bosna i Hercegovina",
    },
    {
      id: "SRB",
      name: "Srbija",
    },
    {
      id: "CRO",
      name: "Hrvatska",
    },
  ]);
  const [cities, setCities] = useState([]);
  const [country, setCountry] = useState("BIH");
  const [city, setCity] = useState(null);
  const onClearData = () => {
    setData([]);
  };
  useEffect(() => {
    setTimeout(() => setCounter(5), 5000);
  }, []);
  useEffect(() => {
    fakeApiCall(counter).then((data) => setData(data));
  }, [counter]);
  useEffect(() => {
    getCities(country).then((res) => {
      if (res.length > 0) setCity(res[0]?.id);
      else setCity(null);
      setCities(res);
    });
  }, [country]);
  return (
    <div>
      <h1
        className="counter-heading"
        style={{ background: "lightblue", color: "grey" }}
      >
        Current count is {counter}
      </h1>
      <div className="dependency-select">
        <select
          value={country}
          onChange={(e) => {
            e.preventDefault();
            setCountry(e.target.value);
          }}
        >
          {countries.map((country) => (
            <option key={country.id} value={country.id}>
              {country.name}
            </option>
          ))}
        </select>
        <select
          value={city}
          onChange={(e) => {
            e.preventDefault();
            setCity(e.target.value);
          }}
        >
          {cities.map((city) => (
            <option key={city.id} value={city.id}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
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
