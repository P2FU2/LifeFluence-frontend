import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default async function Home() {
  const { data: tasks } = await supabase.from("tasks").select("*");

  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <Link href="/tasks">📋 Ver Minhas Tarefas</Link>
      <ul className="mt-4">
        {tasks?.map((task) => (
          <li key={task.id} className="border p-2 my-2">
            <Link href={`/tasks/${task.id}`}>{task.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
