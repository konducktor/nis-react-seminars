import axios from "axios";
import type { Message } from "../types";

const API_URL = import.meta.env?.VITE_API_URL || "http://localhost:3001";

function authHeaders(token: string) {
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json"
  };
}

export async function getMessages(token: string): Promise<Message[]> {
  const response = await fetch(`${API_URL}/messages`, {
    headers: authHeaders(token)
  });
  if (!response.ok) throw new Error(`Error with GET /messages: ${response.status}`);

  return response.json();
}

export async function sendMessage(token: string, text: string): Promise<Message> {
  const response = await axios.post(`${API_URL}/messages`, { text }, {
    headers: authHeaders(token)
  });

  return response.data();
}
