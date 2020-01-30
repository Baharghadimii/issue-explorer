import React, { useState } from 'react';
import './App.css';

import SearchBar from "./components/SearchPage";
import Table from './components/Table';
import useApplicationData from './hooks/useApplicationData';

function App() {

  const { getIssues, getPullRequest } = useApplicationData();
  const [state, setState] = useState({
    issues: [],
    pulls: []
  });

  const search = (data) => {
    const requestData = data.split('com/');
    getIssues(requestData[1]).then((res) => {
      setState({ ...state, issues: res })
    });
    getPullRequest(requestData[1]).then((res) => {
      setState({ ...state, pulls: res })
    })
  }
  console.log(state);
  return (
    <div className="App">
      <SearchBar onSearch={search} />
      <Table issues={state.issues} pulls={state.pulls} />
    </div>

  );
}

export default App;
