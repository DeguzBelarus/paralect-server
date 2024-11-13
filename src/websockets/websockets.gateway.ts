import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

import { IS_PRODUCTION } from 'src/constants';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class WebsocketsGateway {
  @WebSocketServer()
  server: Server;

  handleConnection(socket: Socket) {
    !IS_PRODUCTION && console.log(`New websocket connection: socket: ${socket.id}`);
  }

  handleDisconnect(socket: Socket) {
    !IS_PRODUCTION && console.log(`Websocket disconnection: socket: ${socket.id}`);
  }
}
