README.md - LifeFluence Frontend 🌀
📌 Sobre o Projeto
O LifeFluence é um web app que permite aos usuários organizarem sua vida como um workflow. Ele utiliza Next.js para o frontend, Supabase para o banco de dados e um backend em Node.js (Express). A aplicação está hospedada na Vercel.

🚀 Tecnologias Utilizadas
🖥️ Frontend: Next.js (React)
📦 Banco de Dados: Supabase
🔧 Backend: Node.js + Express
🎨 Estilização: Tailwind CSS
☁ Hospedagem: Vercel

📂 Estrutura do Projeto
LifeFluence-frontend/
│── node_modules/ # Dependências do projeto (ignorar no Git)
│── public/ # Imagens e arquivos estáticos (favicons, logos, etc.)
│── src/ # Diretório principal do código-fonte
│ ├── api/ # Serviços externos e chamadas à API
│ │ ├── auth.ts # Autenticação via Supabase
│ │ ├── tasks.ts # API para tarefas e fluxos de trabalho
│ │ ├── users.ts # API para usuários
│ ├── app/ # Next.js App Router (páginas e layouts)
│ │ ├── components/ # Componentes reutilizáveis
│ │ ├── hooks/ # Hooks customizados
│ │ ├── styles/ # Estilos globais e módulos CSS
│ │ ├── layout.tsx # Layout global
│ │ ├── page.tsx # Página principal
│ ├── lib/ # Configurações e utilitários globais
│ │ ├── supabase.ts # Configuração do Supabase
│ │ ├── utils.ts # Funções utilitárias
│ ├── types/ # Tipos e interfaces do TypeScript
│ │ ├── task.ts # Definições de tipos para tarefas
│ │ ├── user.ts # Definições de tipos para usuários
│── .next/ # Arquivos temporários do Next.js (ignorar no Git)
│── .env # Variáveis de ambiente (não subir para o Git)
│── .gitignore # Arquivos ignorados pelo Git
│── README.md # Documentação do projeto
│── next.config.ts # Configuração do Next.js
│── package.json # Dependências e scripts do projeto
│── tailwind.config.ts # Configuração do Tailwind CSS
│── tsconfig.json # Configuração do TypeScript

📥 Instalação

1️⃣ Clone este repositório:

git clone https://github.com/P2FU2/LifeFluence-frontend.git

2️⃣ Entre no diretório do projeto:

cd LifeFluence-frontend

3️⃣ Instale as dependências:

npm install

4️⃣ Crie um arquivo .env e adicione suas credenciais do Supabase:

NEXT_PUBLIC_SUPABASE_URL=SEU_URL_DO_SUPABASE
NEXT_PUBLIC_SUPABASE_ANON_KEY=SEU_ANON_KEY

5️⃣ Inicie o servidor:

npm run dev
Acesse http://localhost:3000 no navegador.

📜 Licença
Este projeto está licenciado sob a MIT License - consulte o arquivo LICENSE para mais detalhes.

🤝 Contribuições
Quer contribuir? Siga estes passos:

Fork este repositório
Crie uma branch para a feature (git checkout -b minha-feature)
Faça um commit (git commit -m "Minha contribuição")
Envie um PR (git push origin minha-feature)
