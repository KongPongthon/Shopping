'use client';
import useSocket from '@/app/hooks/useSocket';
import React, { useEffect, useState } from 'react';
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}
const Page = () => {
  const socket = useSocket();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (!socket) return;

    socket.on('product:created', (product: Product) => {
      setProducts((prev) => [...prev, product]);
    });

    return () => {
      socket?.off('product:created');
    };
  }, [socket]);

  return (
    <div>
      <h1>Real-time Products</h1>
      <h1>{products.length}</h1>
      {products.map((p) => (
        <div key={p.id}>{p.name}</div>
      ))}
    </div>
  );
};

export default Page;
