// import { getProducts } from '@/api/userAPI';
import React from 'react';
import ProductListRealtime from './ProductListRealtime';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Products | Shopping',
  description: 'Explore the products available in our store',
};

const Home = async () => {
  // const initialProducts = await getProducts();

  return (
    <div>
      <div className='relative aspect-[3/1] mb-12'>
        <Image
          src='/featured.png'
          alt='featured Product'
          width={1200}
          height={1200}
        />
        {/* <button onClick={test} name='test' className='btn btn-primary bg-black' /> */}
        {/* <CustomInput label='Email' value='' placeholder='Email' name='email' /> */}
        {/* <Create /> */}
      </div>
      <ProductListRealtime />
    </div>
  );
};
export default Home;
// 'use client';
// import { useEffect, useState } from 'react';
// import useSocket from '../../hooks/useSocket';
// import ButtonUP from './create/page';
// interface Product {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
//   stock: number;
// }

// export default function Home() {
//   const socket = useSocket();
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     if (!socket) return;

//     socket.on('product:created', (product: Product) => {
//       setProducts((prev) => [...prev, product]);
//     });

//     return () => {
//       socket?.off('product:created');
//     };
//   }, [socket]);

//   return (
//     <div>
//       <h1>Real-time Products</h1>
//       {products.map((p) => (
//         <div key={p.id}>
//           {p.name} - ${p.price}
//         </div>
//       ))}
//       <ButtonUP />
//     </div>
//   );
// }
