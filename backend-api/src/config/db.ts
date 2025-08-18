// import 'dotenv/config';
// import { drizzle } from 'drizzle-orm/libsql';
// import { createClient } from '@libsql/client';

// if (!process.env.DB_FILE_NAME) {
//   throw new Error('DB_FILE_NAME environment variable is not defined');
// }
// const client = createClient({ url: process.env.DB_FILE_NAME! });
// const db = drizzle({ client });

// export default db;

import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

if (!process.env.DATABASE_URL) {
  throw new Error('DB_FILE_NAME environment variable is not defined');
}

const client = createClient({
  url: process.env.DATABASE_URL,
});
const db = drizzle(client);

export default db;
