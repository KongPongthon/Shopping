'use client';
import { createTEST } from '@/api/Auth';
import React from 'react';

const Page = () => {
  const test = async () => {
    const newProduct = {
      name: `test-${Date.now()}`,
      description: 'Realtime test',
      price: Math.floor(Math.random() * 1000),
      stock: 10,
    };
    console.log('newProduct:', newProduct);
    await createTEST(newProduct);
  };
  return (
    <div>
      <button onClick={test} name='test' className='btn btn-primary bg-black' />
    </div>
  );
};

export default Page;
