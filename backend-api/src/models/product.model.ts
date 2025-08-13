import { sqliteTable, integer, text, int } from 'drizzle-orm/sqlite-core';

// Schema ของ table products
 const products = sqliteTable('products', {
  id: integer().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  description: text(),
  price: int().notNull(),
  stock: int().notNull().default(0),
});
export default products;
// Explicit Type สำหรับ insert
export type ProductInsert = {
  name: string;
  description?: string;
  price: number;
  stock: number;
};

// Type สำหรับ select
export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
};
