import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // 🚀 Ativa o Strict Mode do React para detectar erros
  swcMinify: true, // 🔥 Usa SWC para minificar o código (mais rápido que Terser)
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    }, // ⚡ Habilita Server Actions com configuração correta
  },
  images: {
    domains: ["your-supabase-url.com", "cdn.example.com"], // 📷 Permite carregar imagens externas (ajuste conforme necessário)
  },
  output: "standalone", // 🚀 Torna o Next.js independente (ótimo para deploys personalizados)
};

export default nextConfig;
