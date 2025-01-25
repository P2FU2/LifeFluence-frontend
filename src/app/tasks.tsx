import { supabase } from "@/lib/supabase";

export default async function TaskDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { data: task } = await supabase
    .from("tasks")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!task) return <p>Tarefa não encontrada!</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold">{task.title}</h1>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
    </div>
  );
}
