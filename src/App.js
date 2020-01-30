import React from 'react';
import './App.css';

import SearchBar from "./components/SearchPage";
import Table from './components/Table';
import useApplicationData from './hooks/useApplicationData';

function App() {

  const { getIssues, getPullRequest } = useApplicationData();

  const search = (data) => {
    getIssues('ZSully09', 'To-Do-List').then((res) => {
      console.log(res);
    });
  }
  return (
    <div className="App">
      <SearchBar onSearch={search} />
      <Table />
    </div>

  );
}

export default App;
