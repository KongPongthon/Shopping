import Image from 'next/image';
import React from 'react';

const CardProduct = () => {
  return (
    <div className='card bg-base-100 w-84 shadow-sm text-black'>
      <figure className='bg-gray-200'>
        {/* <img
        src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
        alt='Shoes'
      /> */}
        <Image
          src='/test1.png'
          alt='Product'
          height={400}
          width={400}
          className='bg-cover'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>Card Title</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className='card-actions justify-between items-center'>
          <div className='text-xl'>$59.90</div>
          <button className='btn btn-primary bg-black border-black text-white'>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
