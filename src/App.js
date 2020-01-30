import React, { useState } from 'react';
import './App.scss';

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
    getIssues(requestData[1]).then((issues) => {
      getPullRequest(requestData[1]).then((pulls) => {
        setState({ ...state, pulls: pulls, issues: issues })
      });
    });

  }
  console.log(state);
  return (
    <div className="App">
      <SearchBar onSearch={search} />
      <div className="tables">
        <Table data={state.issues} name="Issue" />
        <Table data={state.pulls} name="Pull Request" />
      </div>
    </div>

  );
}

export default App;
