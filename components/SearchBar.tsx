'use client';
import { SearchManufacter } from '@/components/';

import { useState } from 'react';

const SearchBar = () => {
  const [manufacturer, setManuFacturer] = useState('');
  const handleSearch = () => {};
  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacter
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
