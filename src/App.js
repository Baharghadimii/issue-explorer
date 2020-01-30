import React, { useState } from 'react';
import './App.scss';

import SearchBar from "./components/SearchPage";
import Table from './components/Table';
import useApplicationData from './hooks/useApplicationData';
let DATA = [];

function App() {

  const { setList } = useApplicationData();
  const [state, setState] = useState({
    list: []
  });

  const select = (value) => {
    if (value === 'open') {
      const openList = DATA.filter(item => item.category === 'open')
      setState({ list: openList })
    } else if (value === 'close') {
      const closeList = DATA.filter(item => item.category === 'close')
      setState({ list: closeList })
    } else if (value === 'pull') {
      const pullList = DATA.filter(item => item.category === 'pull')
      setState({ list: pullList })
    } else {
      setState({ list: DATA })
    }
  }
  const search = (data) => {
    const requestData = data.split('com/');
    setList(requestData[1]).then((data) => {
      setState({ list: data.list });
      DATA = data.list;
    });

  }
  console.log(state);
  return (
    <div className="App">
      <SearchBar onSearch={search} />
      <div className="tables">
        <Table data={state} select={select} />
      </div>
    </div>

  );
}

export default App;
