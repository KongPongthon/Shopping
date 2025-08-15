import { CardProductTypes } from '@/types/product';
import { IconShoppingCart } from '@tabler/icons-react';
import Image from 'next/image';
import React from 'react';
import { cn } from '../lib/cn';

interface Props {
  item: CardProductTypes;
}

const CardProduct: React.FC<Props> = ({ item }) => {
  console.log('item', item);
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
        <div className='flex gap-2'>
          {item &&
            item.color?.map((c) => {
              console.log('c', c);
              if (!c.amount) return;
              return (
                <div
                  className={cn('border rounded-full w-8 h-8')}
                  style={{ backgroundColor: c.color }}
                  key={c.color}
                />
              );
            })}
          {/* // return (
              //   <div
              //     className='border rounded-full w-8 h-8'
              //     style={{ backgroundColor: c.color }}
              //     key={c.color}
              //   />
              // ); */}
        </div>
        <div>{item.category}</div>
        <h2 className='card-title'>{item.title || 'test'}</h2>
        <p>{item.description}</p>
        <div className='card-actions justify-between items-center'>
          <div className='text-xl'>${item?.price}</div>
          <button className='btn btn-primary bg-black border-black text-white'>
            <IconShoppingCart stroke={2} /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
