import React, { useState } from 'react';
import './App.scss';

import SearchBar from "./components/SearchPage";
import Table from './components/Table';
import useApplicationData from './hooks/useApplicationData';

function App() {

  const { getIssues, getPullRequests } = useApplicationData();
  const [state, setState] = useState({
    issues: [],
    pull: []
  });
  const [filter, setFilter] = useState({
    open: false,
    close: false,
    pull: false,
    all: false
  })

  const select = (value) => {
    if (value === 'open') {
      setFilter({ ...state, open: true, close: false, pull: false, all: false })
    } else if (value === 'close') {
      setFilter({ ...state, close: true, open: false, pull: false, all: false })
    } else if (value === 'pull') {
      setFilter({ ...state, pull: true, close: false, open: false, all: false })
    } else {
      setFilter({ ...state, all: true, close: false, open: false, pull: false });
    }
  }
  const search = (data) => {
    const requestData = data.split('com/');
    getIssues(requestData[1]).then((issuesList) => {
      getPullRequests(requestData[1]).then((pullsList) => {
        setState({ ...state, issues: issuesList, pull: pullsList })
        setFilter({ ...state, all: true, close: false, open: false, pull: false })
      })
    })

  }
  console.log(state);
  return (
    <div className="App">
      <SearchBar onSearch={search} />
      <div className="tables">
        <Table data={state} select={select} filter={filter} />
      </div>
    </div>

  );
}

export default App;
