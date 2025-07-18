# Academia API

🚀 **API para sistema de cadastro de alunos de academia**  
Este projeto é uma API desenvolvida em **Node.js** com **Express** e **MongoDB**, que permite gerenciar alunos, autenticação de usuários e planos de academia.

---

## 📋 **Funcionalidades**

### 🔒 **Autenticação JWT**
- Registro de usuários (`POST /api/auth/register`)
- Login de usuários (`POST /api/auth/login`)
- Verificação de token (`GET /api/auth/verify`)
- Controle de acesso por roles (`admin`, `funcionario`, `professor`)

### 🧑‍🎓 **Gerenciamento de Alunos**
- Criar aluno (`POST /api/students`)
- Listar todos os alunos (`GET /api/students`)
- Buscar aluno por ID (`GET /api/students/:id`)
- Atualizar aluno (`PUT /api/students/:id`)
- Deletar aluno (`DELETE /api/students/:id`)

### 🛠️ **Validações**
- Validação de dados com `express-validator`
- Senhas seguras com `bcrypt`
- Campos obrigatórios e únicos (CPF, email)

---

## 🛠️ **Tecnologias Utilizadas**

- **Node.js**: Plataforma de desenvolvimento
- **Express**: Framework para criação de APIs
- **MongoDB**: Banco de dados NoSQL
- **Mongoose**: ODM para MongoDB
- **JWT**: Autenticação segura
- **Bcrypt**: Hash de senhas
- **Express Validator**: Validação de dados
- **Dotenv**: Gerenciamento de variáveis de ambiente

---

## 🚀 **Como Rodar o Projeto**

### Pré-requisitos
- **Node.js** instalado
- **MongoDB** instalado ou configurado (local ou Atlas)

### Passos
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/academia-api.git
   cd academia-api
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o arquivo `.env`:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/academia
   JWT_SECRET=seu_jwt_secret_muito_seguro_aqui_123456789
   NODE_ENV=development
   JWT_EXPIRES_IN=7d
   ```

4. Inicie o servidor:
   ```bash
   npm run dev
   ```

5. Acesse a API:
   - **Health Check**: `GET http://localhost:3000/api/health`
   - **Autenticação**: `POST http://localhost:3000/api/auth/register`

---

## 📂 **Estrutura do Projeto**

```
academia-api/
├── src/
│   ├── app.js              # Arquivo principal da aplicação
│   ├── config/
│   │   └── database.js     # Configuração do MongoDB
│   ├── controllers/
│   │   ├── authController.js
│   │   └── studentController.js
│   ├── middleware/
│   │   └── auth.js         # Middleware de autenticação
│   ├── models/
│   │   ├── Student.js      # Modelo de aluno
│   │   └── User.js         # Modelo de usuário
│   ├── routes/
│   │   ├── auth.js         # Rotas de autenticação
│   │   └── students.js     # Rotas de alunos
│   ├── utils/
│   │   └── validation.js   # Validações
├── .env                    # Variáveis de ambiente
├── package.json            # Dependências e scripts
└── README.md               # Documentação
```

---

## 📌 **Endpoints**

### **Autenticação**
- `POST /api/auth/register` - Registrar usuário
- `POST /api/auth/login` - Fazer login
- `GET /api/auth/verify` - Verificar token
- `GET /api/auth/users` - Listar usuários (admin only)

### **Alunos**
- `POST /api/students` - Criar aluno
- `GET /api/students` - Listar alunos
- `GET /api/students/:id` - Buscar aluno por ID
- `PUT /api/students/:id` - Atualizar aluno
- `DELETE /api/students/:id` - Deletar aluno

---

## 🛡️ **Segurança**
- Autenticação com **JWT**
- Senhas protegidas com **bcrypt**
- Controle de acesso por **roles**

---

## 🧑‍💻 **Contribuição**

1. Faça um fork do projeto
2. Crie uma branch para sua funcionalidade (`git checkout -b minha-feature`)
3. Commit suas alterações (`git commit -m 'Adiciona minha-feature'`)
4. Faça um push para sua branch (`git push origin minha-feature`)
5. Abra um Pull Request

---

## 📄 **Licença**

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Desenvolvido por Venicio**  
🎯 **Pronto para expandir e escalar!**
