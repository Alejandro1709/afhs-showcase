import { API_URL } from "../config";

export const getCharacters = async () => {
  const response = await fetch(`${API_URL}/api/v1/characters`);
  const data = await response.json();
  return data;
}

export const getCharacter = async (slug: string) => {
  const response = await fetch(`${API_URL}/api/v1/characters/${slug}`);
  const data = await response.json();
  return data;
}

export const createCharacter = async (character: any) => {
  const response = await fetch(`${API_URL}/api/v1/characters`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    },
    body: JSON.stringify(character),
  });
  const data = await response.json();
  return data;
}