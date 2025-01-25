"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { User } from "@supabase/supabase-js";

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (!user) return <p>Carregando...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold">Perfil</h1>
      <p>Email: {user.email}</p>
      <button className="bg-red-500 text-white p-2 mt-4" onClick={handleLogout}>
        Sair
      </button>
    </div>
  );
}
