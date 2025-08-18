'use client';
import { IconBell } from '@tabler/icons-react';
import React from 'react';

const Notification = () => {
  return (
    <div className='dropdown dropdown-bottom dropdown-end'>
      <div tabIndex={0} role='button' className='m-1'>
        <IconBell stroke={2} />
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

export default Notification;
