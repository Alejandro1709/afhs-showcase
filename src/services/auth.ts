import { API_URL } from "../config";

export const handleLogin = async (email: string, password: string) => {
  const response = await fetch(`${API_URL}/api/v1/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();

  localStorage.setItem("user", JSON.stringify(data));

  console.log(data);

  return data;
};