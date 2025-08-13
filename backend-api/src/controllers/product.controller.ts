// product.controller.ts
import { Request, Response } from 'express';
import products, { ProductInsert } from '../models/product.model';
import db from '../config/db';

const createProduct = async (
  req: Request<{}, {}, ProductInsert>,
  res: Response
) => {
  try {
    console.log('req.body:', req.body);
    const { name, description, price, stock } = req.body;

    if (!name || price === undefined || stock === undefined) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    await db
      .insert(products)
      .values({
        name,
        description: description || '',
        price,
        stock,
      })
      .run();

    return res.status(201).json({ message: 'Product created successfully' });
  } catch (err) {
    console.error('Error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// หรือ export แบบ default object
export { createProduct };
