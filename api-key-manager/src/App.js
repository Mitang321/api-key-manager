import React, { useState } from "react";
import KeyForm from "./components/KeyForm";
import KeyList from "./components/KeyList";
import FilterForm from "./components/FilterForm";
import "./styles.css";

function App() {
  const [keys, setKeys] = useState([]);
  const [filter, setFilter] = useState("");

  const addKey = (newKey) => {
    setKeys([...keys, newKey]);
  };

  return (
    <div className="App">
      <h1>API Key Manager</h1>
      <KeyForm addKey={addKey} />
      <FilterForm setFilter={setFilter} />
      <KeyList keys={keys} filter={filter} />
    </div>
  );
}

export default App;
