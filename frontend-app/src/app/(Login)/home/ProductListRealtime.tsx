'use client';
import { useEffect, useState } from 'react';
import useSocket from '@/app/hooks/useSocket';
import Image from 'next/image';
import CardProduct from '@/app/components-ui/CardProduct';
import { CardProductTypes } from '@/types/product';
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

  // console.log('products', products);

  return (
    <ul>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 h-full justify-items-center'>
        {products.map((p) => {
          // console.log('p:', p);
          const cardProductItem: CardProductTypes = {
            id: p.id.toString(),
            name: p.name,
            description: p.description,
            price: p.price,
            // stock: p.stock,
            color: [
              {
                color: '#000',
                amount: 1,
              },
              {
                color: '#ffff',
                amount: 1,
              },
              {
                color: '#ff0000',
                amount: 0,
              },
            ],
          };
          return (
            <li key={p.id}>
              <CardProduct item={cardProductItem} />
            </li>
          );
        })}
      </div>
    </ul>
  );
}
