'use client';
import { IconShoppingCart } from '@tabler/icons-react';
import React from 'react';

const Shopping = () => {
  return (
    <div className='dropdown dropdown-bottom dropdown-end'>
      <span className=' absolute top-[-10] right-[-12] border-black rounded-xl'>
        00
      </span>
      <div tabIndex={0} role='button' className='m-1'>
        <IconShoppingCart stroke={2} />
      </div>
      <ul
        tabIndex={0}
        className='dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm'
      >
        <li>
          <a>Item 1</a>
        </li>
      </ul>
    </div>
  );
};

export default Shopping;
