import React, { useState } from 'react';
import './App.scss';

import SearchBar from "./components/SearchPage";
import Table from './components/Table';
import useApplicationData from './hooks/useApplicationData';

function App() {

  const { getOpenIssues, getClosedIssues, getPullRequests } = useApplicationData();
  const [state, setState] = useState({
    openIssues: [],
    closedIssue: [],
    pull: []
  });

  const search = (data) => {
    const requestData = data.split('com/');
    getOpenIssues(requestData[1]).then((openIssuesList) => {
      getClosedIssues(requestData[1]).then((closedIssuesList) => {
        getPullRequests(requestData[1]).then((pullsList) => {
          console.log(pullsList);
          // setState({ ...state, openIssues: openIssuesList, closedIssue: closedIssuesList, pull: pullsList })
        })
      })
    });

  }
  console.log(state);
  return (
    <div className="App">
      <SearchBar onSearch={search} />
      <div className="tables">
        {/* <Table data={state} /> */}
      </div>
    </div>

  );
}

export default App;
