import React, { useState } from 'react';
import './App.scss';

import SearchBar from "./components/SearchPage";
import Table from './components/Table';
import useApplicationData from './hooks/useApplicationData';
import useVisualMode from './hooks/useVisualMode';
import CircularProgress from '@material-ui/core/CircularProgress';

let DATA = [];
const EMPTY = 'EMPTY';
const SPINNER = 'SPINNER';
const SHOW = 'SHOW';

function App() {

  const { setList } = useApplicationData();
  const [state, setState] = useState({
    list: []
  });
  const { mode, transition } = useVisualMode(
    state.list.length ? SHOW : EMPTY
  );

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
    transition(SPINNER);
    const requestData = data.split('com/');
    setList(requestData[1]).then((data) => {
      setState({ list: data.list });
      transition(SHOW);
      DATA = data.list;
    });

  }
  console.log(state);
  return (
    <div className="App">
      <SearchBar onSearch={search} />
      {mode === 'EMPTY' && <h1 className='initial-text'>Place the repository link in the search bar and click to see the issues!</h1>}
      {mode === 'SHOW' && <div className="tables">
        <Table data={state} select={select} />
      </div>}
      {mode === 'SPINNER' && <CircularProgress size={60} style={{ marginTop: '7rem' }} disableShrink />}
    </div>

  );
}

export default App;
