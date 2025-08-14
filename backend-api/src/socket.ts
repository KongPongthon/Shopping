import { Server } from 'socket.io';

let io: Server;

export function initSocket(server: any) {
  io = new Server(server, {
    // cors: {
    //   origin: ['http://localhost:3000', process.env.FRONTEND_URL!],
    //   credentials: true,
    // },
    cors: {
      origin: ['http://localhost:3000'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
      // credentials: true,
    },
  });

  io.on('connection', (socket) => {
    console.log(`Socket connected: ${socket.id}`);
  });

  return io;
}

export function getIO() {
  if (!io) throw new Error('Socket.io not initialized');
  return io;
}
