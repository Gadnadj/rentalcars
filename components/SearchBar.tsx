'use client';
import { SearchManufacter } from '@/components/';

const SearchBar = () => {
  const handleSearch = () => {};
  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacter />
      </div>
    </form>
  );
};

export default SearchBar;
