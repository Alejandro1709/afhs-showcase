import { API_URL } from "../config";

export const getCharacters = async () => {
  const response = await fetch(`${API_URL}/api/v1/characters`);
  const data = await response.json();
  return data;
}