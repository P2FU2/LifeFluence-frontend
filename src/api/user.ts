const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const getUsers = async () => {
  try {
    const response = await fetch(`${API_URL}/users`);
    if (!response.ok) throw new Error("Erro ao buscar usuários");
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};
