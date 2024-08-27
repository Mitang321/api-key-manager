import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import KeyForm from "./components/KeyForm";
import KeyList from "./components/KeyList";
import FilterForm from "./components/FilterForm";
import Analytics from "./components/Analytics";
import UsageLog from "./components/UsageLog";
import SearchForm from "./components/SearchForm";
import "./App.css";

function App() {
  const [keys, setKeys] = useState([]);
  const [filter, setFilter] = useState({ category: "", search: "" });
  const [log, setLog] = useState([]);

  const addKey = (newKey) => {
    setKeys([...keys, newKey]);
  };

  const editKey = (index, updatedKey) => {
    const updatedKeys = [...keys];
    updatedKeys[index] = { ...updatedKeys[index], ...updatedKey };
    setKeys(updatedKeys);
  };

  const deleteKey = (index) => {
    const updatedKeys = keys.filter((_, i) => i !== index);
    setKeys(updatedKeys);
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
    <Router>
      <div className="App">
        <header>
          <h1 className="app-title">API Key Manager</h1>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/keys"
            element={
              <>
                <KeyForm addKey={addKey} />
                <SearchForm setFilter={setFilter} />
                <FilterForm setFilter={setFilter} />
                <Analytics keys={keys} />
                <KeyList
                  keys={keys}
                  filter={filter}
                  logUsage={logUsage}
                  editKey={editKey}
                  deleteKey={deleteKey}
                />
                <UsageLog log={log} />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
