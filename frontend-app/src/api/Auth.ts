interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}

const createTEST = async (
  product: Omit<Product, 'id'>
): Promise<Product | undefined> => {
  try {
    // const response = await baseUrlNoCredential.post('/user/createtest', test);
    const respones = await fetch(
      'http://localhost:8000/api/v1/user/createtest',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      }
    );
    return respones.json();
  } catch (err) {
    console.error('Error:', err);
  }
};
export { createTEST };
