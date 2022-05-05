import React from 'react';
import './SearchInput.css';

const SearchInput = ({ onChange }) => {
  return (
    <div className='input-div'>
      <input
        className='search-input'
        type='text'
        placeholder='Search your cryptocurrencie...'
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
