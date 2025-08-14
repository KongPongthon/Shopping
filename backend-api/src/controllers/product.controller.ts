// product.controller.ts
import { Request, Response } from 'express';
import products, { ProductInsert } from '../models/product.model';
import db from '../config/db';
import { getIO } from '../socket';

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

    // await db
    //   .insert(products)
    //   .values({
    //     name,
    //     description: description || '',
    //     price,
    //     stock,
    //   })
    //   .run();
    const result = await db
      .insert(products)
      .values({
        name,
        description: description || '',
        price,
        stock,
      })
      .returning();
    console.log('result:', result);

    // ส่งข้อมูลไปยังทุก client ผ่าน socket
    getIO().emit('product:created', result[0]);

    return res.status(201).json({ message: 'Product created successfully' });
  } catch (err) {
    console.error('Error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const getProducts = async (req: Request, res: Response) => {
  try {
    const getproduct = await db.select().from(products);
    console.log('getproduct:', getproduct);
    return res.status(200).json(getproduct);
  } catch (err) {
    console.error('Error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// หรือ export แบบ default object
export { createProduct, getProducts };
