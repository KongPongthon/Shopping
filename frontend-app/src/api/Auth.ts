'use client';
import { baseUrlNoCredential } from './baseUrl';

const createTEST = async (): Promise<any> => {
  try {
    const test = { name: 'test', description: 'test', price: 30, stock: 10 };
    const response = await baseUrlNoCredential.post('/user/createtest', test);
    return response.data;
  } catch (err) {
    console.error('Error:', err);
  }
};
export { createTEST };
