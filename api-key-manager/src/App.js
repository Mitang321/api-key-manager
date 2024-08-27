import React, { useState } from "react";
import KeyForm from "./components/KeyForm";
import KeyList from "./components/KeyList";
import FilterForm from "./components/FilterForm";
import Analytics from "./components/Analytics";
import UsageLog from "./components/UsageLog";
import SearchForm from "./components/SearchForm";
import "./styles.css";

function App() {
  const [keys, setKeys] = useState([]);
  const [filter, setFilter] = useState({ category: "", search: "" });
  const [search, setSearch] = useState("");
  const [log, setLog] = useState([]);

  const addKey = (newKey) => {
    setKeys([...keys, newKey]);
  };

  const logUsage = (index) => {
    const updatedKeys = [...keys];
    updatedKeys[index].usageCount += 1;
    setKeys(updatedKeys);
    setLog([
      ...log,
      `Key ${
        updatedKeys[index].apiKey
      } used at ${new Date().toLocaleTimeString()}`,
    ]);
  };

  return (
    <div className="App">
      <h1 className="app-title">API Key Manager</h1>
      <KeyForm addKey={addKey} />
      <SearchForm setSearch={setSearch} />
      <FilterForm setFilter={setFilter} />
      <Analytics keys={keys} />
      <KeyList keys={keys} filter={{ ...filter, search }} logUsage={logUsage} />
      <UsageLog log={log} />
    </div>
  );
}

export default App;
