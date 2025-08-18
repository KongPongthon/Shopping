import { IconHome } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SearchBar from './SearchBar';
import Shopping from './Menu/Shopping';
import Notification from './Menu/Notification';

const Navbar = () => {
  return (
    <nav className='w-full flex items-center justify-between border-b border-gray-200 pb-4 px-4 py-2'>
      <Link href='/' className='flex items-center'>
        <Image
          src='/next.svg'
          alt='logo'
          width={100}
          height={100}
          className='w-6 h-6 md:w-9 md:h-9'
        />
        <p className='hidden md:block text-md font-medium tracking-wider'>
          Landdokmai
        </p>
      </Link>
      <div className='flex items-center gap-4'>
        <SearchBar />
        <Link href='/' className='flex items-center'>
          <IconHome stroke={2} />
        </Link>
        <Notification />
        <Shopping />
        <Link href='/login' className='flex items-center gap-2 link link-hover'>
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
