import { sql } from 'drizzle-orm';
import { sqliteTable, integer, text, int } from 'drizzle-orm/sqlite-core';
import { createId } from '@paralleldrive/cuid2';
// Schema ของ table products
const products = sqliteTable('products', {
  // id: integer().primaryKey({ autoIncrement: true }),
  id: text()
    .primaryKey()
    .$defaultFn(() => createId()),
  name: text().notNull(),
  description: text(),
  price: integer().notNull(),
  // stock: integer().notNull().default(0),
  title: text(),
  image: text(),
  category: text(),
  size: text(),
  color: text({ mode: 'json' }).$type<{ color: string; amount: number }[]>(),
});
export default products;

export type ProductInsert = {
  id?: string;
  name: string;
  description?: string;
  price: number;
  title: number;
  image: string;
  category: string;
  size: string;
  color: { color: string; amount: number }[];
};

// Type สำหรับ select
export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  title: number;
  image: string;
  category: string;
  size: string;
  color: { color: string; amount: number }[];
};
