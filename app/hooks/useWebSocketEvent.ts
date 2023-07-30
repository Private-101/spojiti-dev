/*
import React from 'react';

import {
  useWebSocketMessage,
  useWebSocketError,
  useWebSocketClose,
  useWebSocketOpen,
} from '@lxsmnsyc/react-use-websockets';

const wss = new WebSocket('ws://localhost:8080');

function App() {
  const onMessageData = useWebSocketMessage(wss);
  const onErrorData = useWebSocketError(wss);
  const onCloseData = useWebSocketClose(wss);
  const onOpenData = useWebSocketOpen(wss);

  if (onErrorData) {
    return (
      <h3>
        An error occured.
      </h3>
    );
  }
  if (onCloseData) {
    return (
      <h3>
        Connection closed.
      </h3>
    );
  }
  if (onMessageData) {
    return (
      <h3>
        Message received : { onMessageData }
      </h3>
    );
  }
  if (onOpenData) {
    return (
      <h3>
        Connection established.
      </h3>
    );
  }
  return (
    <h3>
      Waiting for a connection.
    </h3>
  );
}

export default App;
*/
import * as React from 'react';

/**
 * WebSocket event types
 */
export type WebSocketEvent = 'open' | 'error' | 'close' | 'message';

/**
 * WebSocket response (from event) types
 */
export type WebSocketResponse = Event | CloseEvent | MessageEvent;

type Optional<T> = T | undefined | null;

function useEvent(
  socket: WebSocket,
  event: WebSocketEvent,
  listen: boolean,
  setState: React.Dispatch<React.SetStateAction<Optional<WebSocketResponse>>>
) {
    const handleEvent = React.useCallback((ev: Event | CloseEvent | MessageEvent<any>) => setState(ev), [setState])
  React.useEffect(() => {
    if (listen) {
      socket.addEventListener(event, handleEvent);

      return () => socket.removeEventListener(event, handleEvent);
    }

    return () => {}
  }, [socket, event, listen, handleEvent]);
}

/**
 * A React Hook that listens to a WebSocket instance's WebSocket event.
 * 
 * Re-renders the component whenever the event emits.
 *
 * @param socket a WebSocket instance
 * @param event a WebSocket event
 * @param listen conditionally listen to the event, defaults to true.
 */
export default function useWebSocketEvent(socket: WebSocket, event: WebSocketEvent, listen: boolean = true) {
  const [state, setState] = React.useState<Optional<WebSocketResponse>>();
  useEvent(socket, event, listen, setState);
  return state;
}

/**
 * Listens to a WebSocket instance's 'open' event
 * @param socket a WebSocket instance
 * @param listen conditionally listen to the event, defaults to true
 */
export const useWebSocketOpen =
  (socket: WebSocket, listen: boolean = true): Optional<Event> => useWebSocketEvent(socket, 'open', listen);

/**
 * Listens to a WebSocket instance's 'error' event
 * @param socket a WebSocket instance
 * @param listen conditionally listen to the event, defaults to true
 */
export const useWebSocketError =
  (socket: WebSocket, listen: boolean = true): Optional<Event> => useWebSocketEvent(socket, 'error', listen);

/**
 * Listens to a WebSocket instance's 'close' event
 * @param socket a WebSocket instance
 * @param listen conditionally listen to the event, defaults to true
 
export function useWebSocketClose(socket: WebSocket, listen: boolean = true): Optional<CloseEvent> {
  const [state, setState] = React.useState<Optional<CloseEvent>>();
  useEvent(socket, 'close', listen, setState);
  return state;
} */

/**
 * Listens to a WebSocket instance's 'message' event
 * @param socket a WebSocket instance
 * @param listen conditionally listen to the event, defaults to true.
 
export function useWebSocketMessage(socket: WebSocket, listen: boolean = true): Optional<MessageEvent> {
  const [state, setState] = React.useState<Optional<MessageEvent>>();
  useEvent(socket, 'message', listen, setState);
  return state;
} */