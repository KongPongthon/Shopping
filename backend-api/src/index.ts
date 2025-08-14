import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import main from './routes/main.routes';
import db from './config/db';
import { createServer } from 'http';
import { initSocket } from './socket';
const app = express();

// เพิ่ม CORS
app.use(
  cors({
    origin: ['http://localhost:3000', process.env.FRONTEND_URL!],
    credentials: true,
    exposedHeaders: ['Content-Type'],
  })
);

app.use(express.json());
app.get('/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

app.use('/api/v1', main);

async function checkDB() {
  try {
    console.log('Database connection established');
    await db.select();
  } catch (err) {
    console.error('DB connection error:', err);
  }
}

const PORT = process.env.PORT || 8000;
// app.listen(PORT, async () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
//   console.log(`📝 API available at http://localhost:${PORT}/api/v1`);
//   await checkDB();
// });

const httpServer = createServer(app);
initSocket(httpServer);

httpServer.listen(PORT, async () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📝 API available at http://localhost:${PORT}/api/v1`);
  await checkDB();
});
