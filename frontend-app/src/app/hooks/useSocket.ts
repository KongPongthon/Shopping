// 'use client';
// import { useEffect, useRef } from 'react';
// import { io, Socket } from 'socket.io-client';

// export default function useSocket() {
//   const socketRef = useRef<Socket | null>(null);

//   useEffect(() => {
//     socketRef.current = io('http://localhost:8000', {
//       transports: ['websocket'],
//     });

//     socketRef.current.on('connect', () => {
//       console.log('Socket connected:', socketRef.current?.id);
//     });

//     socketRef.current.on('connect_error', (err) => {
//       console.error('Socket connect error:', err);
//     });

//     return () => {
//       socketRef.current?.disconnect();
//     };
//   }, []);

//   return socketRef.current;
// }
// hooks/useSocket.ts
'use client';
import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

export default function useSocket(): Socket | null {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const s = io('http://localhost:8000', { transports: ['websocket'] });

    s.on('connect', () => console.log('Socket connected:', s.id));
    s.on('connect_error', (err) => console.error('Socket connect error:', err));

    setSocket(s);

    return () => {
      s.disconnect();
    };
  }, []);

  return socket;
}
