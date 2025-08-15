import { Product } from '@/types/product';

const getProducts = async (): Promise<Product[]> => {
  try {
    // const response = await fetch('http://localhost:8000/api/v1/user/gettest');
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/gettest`,
      {
        cache: 'no-store', // ป้องกัน cache ใน SSR
      }
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (err) {
    console.error('Error:', err);
    throw err;
  }
};

export { getProducts };
