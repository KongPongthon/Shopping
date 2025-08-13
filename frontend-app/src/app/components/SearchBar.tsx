import { IconSearch } from '@tabler/icons-react';
import React from 'react';

const SearchBar = () => {
  return (
    <div className='hidden sm:flex items-center gap-2 rounded-md ring ring-gray-200 px-2 py-1 shadow-md'>
      <IconSearch stroke={2} className='text-gray-400' />
      <input
        id='search'
        type='search'
        className='w-full outline-0'
        placeholder='Search'
      />
    </div>
  );
};

export default SearchBar;
