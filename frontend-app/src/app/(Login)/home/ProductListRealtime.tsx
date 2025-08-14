'use client';
import { useEffect, useState } from 'react';
import useSocket from '@/app/hooks/useSocket';
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}
interface Props {
  initialProducts: Product[];
}

export default function ProductListRealtime({ initialProducts }: Props) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const socket = useSocket(); // type: Socket | null

  useEffect(() => {
    if (!socket) return; // ถ้า null → ออกจาก useEffect

    const handleProductCreated = (product: Product) => {
      setProducts((prev) => [...prev, product]);
    };

    socket.on('product:created', handleProductCreated);

    return () => {
      socket.off('product:created', handleProductCreated); // cleanup
    };
  }, [socket]);

  console.log('products', products);

  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>
          {p.name} - ${p.price}
        </li>
      ))}
    </ul>
  );
}
