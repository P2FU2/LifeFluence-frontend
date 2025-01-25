export interface User {
  id: string; // ID do usuário (geralmente UUID)
  name: string; // Nome do usuário
  email: string; // E-mail do usuário
  avatarUrl?: string; // URL opcional da foto de perfil
  createdAt: string; // Data de criação da conta (ISO String)
}

export interface AuthUser extends User {
  token: string; // Token de autenticação do usuário
}
