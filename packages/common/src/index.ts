export interface ServerToClientMessages {
  new_participant: (name: string) => void,
}

export interface ClientToServerMessages {
  set_name: (name: string) => void,
}

export interface ServerToServerMessages { }

export interface SocketData {
  name?: string,
}
