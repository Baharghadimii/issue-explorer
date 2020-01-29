import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import SearchBar from "./components/SearchPage";
import Table from './components/Table';

function App() {

  // axios.get('https://api.github.com/repos/ZSully09/To-Do-List/issues')
  //   .then(res => console.log(res));
  return (
    <div className="App">
      <SearchBar />
      <Table />
    </div>

  );
}

export default App;
