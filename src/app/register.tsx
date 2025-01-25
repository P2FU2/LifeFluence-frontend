"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) return alert("Erro ao cadastrar!");
    router.push("/login");
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold">Criar Conta</h1>
      <input
        type="email"
        placeholder="Email"
        className="border p-2 w-full mt-2"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        className="border p-2 w-full mt-2"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-primary text-white p-2 mt-4 w-full"
        onClick={handleRegister}
      >
        Cadastrar
      </button>
    </div>
  );
}
