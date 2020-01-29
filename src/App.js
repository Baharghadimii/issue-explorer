import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import SearchBar from "./components/SearchPage";

function App() {

  // axios.get('https://api.github.com/repos/ZSully09/To-Do-List/issues')
  //   .then(res => console.log(res));
  return (
    <div className="App">
      <SearchBar />
    </div>
  );
}

export default App;
