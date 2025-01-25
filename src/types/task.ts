export type TaskStatus = "pending" | "in-progress" | "completed"; // Status da tarefa

export interface Task {
  id: string; // ID único da tarefa (UUID gerado pelo Supabase)
  title: string; // Título da tarefa
  description?: string; // Descrição opcional
  status: TaskStatus; // Status da tarefa
  dueDate?: string; // Data limite (ISO String)
  userId: string; // ID do usuário dono da tarefa
  createdAt: string; // Data de criação da tarefa (ISO String)
  updatedAt?: string; // Última atualização (ISO String)
}
