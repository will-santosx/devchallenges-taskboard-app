# TaskBoard Application Challenge  

Um simples aplicativo de registro de atividades pessoais.  

## Introdução  
O TaskBoard é um aplicativo projetado para ajudar os usuários a gerenciar suas atividades diárias de forma eficiente, utilizando uma interface responsiva e um sistema de status semelhante ao Kanban.  

## Funcionalidades  

- Responsivo  
- Conexão com Banco de Dados (**Compartilhado na DEMO**)  
- Fullstack  
- Definição de Status (Semelhantes ao Kanban)  
- Definição de Ícone  

## Tecnologias  

1. Next.js  
2. React  
3. Tailwind CSS  
4. Node.js  
5. Prisma  

## Uso  

1. Clone o repositório em seu dispositivo local:  
   ```bash  
   git clone https://github.com/will-santosx/devchallenges-taskboard-app.git
   ```

2. Instale as dependências necessárias:
   ```sh
   npm install  
   ```

3. Crie o arquivo .env na raiz do projeto e conecte seu banco de dados. Exemplo de configuração:
   ```env
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DB_NAME"
   ```

4. Altere o provedor no arquivo /prisma/schema.prisma para o valor que corresponde ao seu banco de dados:
   ```prisma
   datasource db {  
      provider = "postgresql" | "mysql" | "sqlite" | "sqlserver" | "mongodb" | "cockroachdb" // Escolha o provedor do seu banco de dados, ex: provider = "postgresql"  
      url      = env("DATABASE_URL")  
    }  
    // ...
   ```

5. Rode as migrações do Prisma (se necessário):
   ```sh
   npx prisma migrate dev
   ```

6. Inicie a aplicação em ambiente de desenvolvimento:
   ```sh
   npm run dev
   ```
   Acesse a aplicação através da porta 3000:
   ```sh
   http://localhost:3000/
   ```

## Possíveis Melhorias

1. Gerenciamento de fluxo de usuários;
   
2. Implementação de notificações;
   
3. Agendamento de tarefas;
   
4. Lembretes em tarefas
    * Com implementação de editores de texto, como por exemplo TipTap
