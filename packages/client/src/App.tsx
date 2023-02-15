import * as React from "react";
import {
  ClientToServerMessages,
  ServerToClientMessages,
  ServerToServerMessages,
  SocketData,
} from '~../../common/dist';
import { io, Socket } from 'socket.io-client';

const client: Socket<ServerToClientMessages, ClientToServerMessages> = io('http://localhost:3000/');

export default function App() {
  const [participants, set_participants] = React.useState<string[]>([]);
  client.on('new_participant', (name) => {
    set_participants([...participants, name]);
  });
  const [name, set_name] = React.useState<string>('');
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    client.emit('set_name', name);
  };
  return (
    <>
      <form onSubmit={ onSubmit }>
        <input id="your-name" type="text" onChange={(event) => set_name(event.target.value)} />
      </form>
      {
        participants.map((participant, index) => (<p key={index}>{participant}</p>))
      }
    </>
  );
}
