import type { Message } from "../types";

const WS_URL = import.meta.env?.VITE_WS_URL || "ws://localhost:3001";

type SocketCallbacks = {
  onMessage?: (message: Message) => void;
  onStatus?: (status: string) => void;
};

export function connectSocket(token: string, { onMessage, onStatus }: SocketCallbacks) {
  const socket = new WebSocket(`${WS_URL}`);
  
  socket.addEventListener("open", () => {
    onStatus?.("connected");
  });

  socket.addEventListener("close", () => {
    onStatus?.("disconnected");
  });

  socket.addEventListener("message:new", (event) => {
    // Можно обернуть в try / catch
    const data = JSON.parse(event.data) as { type: string, payload: unknown };
    if (data.type === "message:new") onMessage?.(data.payload as Message);
    else if (data.type === "status") onStatus?.(String(data.payload));
  })

  return {
    sendMessage: (text: string) => {
      if (!text || socket.readyState === WebSocket.OPEN) return;
      socket.send(JSON.stringify({ type: "message:send", payload: { text, token } }));
    },
    disconnect: () => {
      socket.close();
    }
  };
}
