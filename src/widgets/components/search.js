import React from 'react';
import './search.css';

// function Search(props) {
//   return (
//     formulario
//   )
// }

const Search = () => (
  <form className="Search">
    <input 
      type="text"
      placeholder="Search"
      className="Search-input"
    />
  </form>
)

export default Search