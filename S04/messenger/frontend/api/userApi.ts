import axios from "axios";
import type { User } from "../types";

const API_URL = import.meta.env?.VITE_API_URL || "http://localhost:3001";

function authHeaders(token: string) {
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json"
  };
}

export async function getProfile(token: string): Promise<User> {
  // TODO: запросить GET /users/me (Fetch) с заголовком Authorization Bearer <token>, вернуть профиль
  const response = await fetch(`${API_URL}/users/me`, {
    headers: authHeaders(token)
  });
  if (!response.ok) throw new Error(`Error with GET: ${response.status}`);

  return response.json();
}

export type UpdateProfilePayload = Partial<Pick<User, "nickname" | "bio">>;

export async function updateProfile(token: string, { nickname, bio }: UpdateProfilePayload): Promise<User> {
  // TODO: опционально отправить PUT /users/me (Fetch или Axios) с { nickname, bio } и заголовком Authorization
  // Вернуть обновленный профиль
  return Promise.reject(new Error("Not implemented"));
}
