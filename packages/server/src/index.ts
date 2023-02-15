import {
  ServerToClientMessages,
  ClientToServerMessages,
  ServerToServerMessages,
  SocketData,
} from 'common';
import { Server, Socket } from 'socket.io';

const server = new Server<
  ClientToServerMessages,
  ServerToClientMessages,
  ServerToServerMessages,
  SocketData>({
    cors: {
      methods: ['GET', 'POST'],
      origin: 'http://localhost:5173',
    }
  });

server.on('connection', (socket) => {
  socket.on('set_name', (name) => {
    console.log(name);
    socket.data.name = name;
    server.emit('new_participant', name);
  });
});

server.listen(3000);
