import React from "react";
import './SearchPage.scss';

const SearchPage = () => {
  return (
    <div className='search'>
      <input className='search-bar' />
      <button className='search-btn'>Search</button>
    </div>
  );
}

export default SearchPage;