import React, { useState } from "react";
import './SearchPage.scss';

const SearchPage = (props) => {
  const [state, setState] = useState('');

  const search = () => {
    props.onSearch(state);
  }

  return (
    <div className='search'>
      <input
        className='search-bar'
        value={state}
        onChange={e => setState(e.target.value)} />
      <button
        className='search-btn'
        onClick={search}>Search</button>
    </div>
  );
}

export default SearchPage;