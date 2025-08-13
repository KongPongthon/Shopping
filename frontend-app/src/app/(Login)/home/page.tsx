'use client';
import { createTEST } from '@/api/Auth';
import CustomInput from '@/app/components-ui/CustomInput';
import React from 'react';

const page = () => {
  const test = async() => {
    await createTEST();
  };
  return (
    <div>
      {/* <CustomInput label='Email' value='' placeholder='Email' name='email' /> */}
      <button onClick={test} name='test' className='btn btn-primary bg-black' />
    </div>
  );
};

export default page;
