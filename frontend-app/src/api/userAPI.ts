import { baseUrlNoCredential } from './baseUrl';

const getProducts = async () => {
  try {
    const response = await baseUrlNoCredential.get('/user/gettest');
    return response.data;
  } catch (err) {
    console.error('Error:', err);
  }
};

export { getProducts };
