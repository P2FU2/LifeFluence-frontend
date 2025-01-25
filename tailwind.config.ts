import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // 📌 Agora escaneia toda a pasta src
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)", // 🔹 Cor principal da UI
        secondary: "var(--secondary)", // 🔹 Cor secundária
        accent: "var(--accent)", // 🔹 Cor de destaque
        muted: "var(--muted)", // 🔹 Cor mais apagada
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Adicionando uma fonte moderna padrão
      },
      borderRadius: {
        xl: "1rem", // 🔹 Bordas arredondadas maiores
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // 🔹 Melhor estilização para formulários
    require("@tailwindcss/typography"), // 🔹 Melhor renderização de textos (Markdown, blogs)
  ],
} satisfies Config;
