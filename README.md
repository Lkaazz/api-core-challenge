# API de Gerenciamento de Tarefas

Esta é uma API RESTful desenvolvida com Express e SQLite (Sequelize) para o gerenciamento de tarefas (To-Do list).

## 🤝 Integração com Frontend
Esta API foi projetada para integrar perfeitamente com o frontend [CoreNotes](link repo). As respostas da API seguem exatamente o formato esperado pelo frontend.

#### ⚠️ Não se esqueça de configurá-lo primeiro

#### Ela permitirá:

- Criar, listar, atualizar e excluir tarefas
- Marcar tarefas como favoritas
- Definir cores para tarefas
- Filtrar tarefas por texto

### Instalação
0. Com o repositório front-end [fornte-end-core-challenge](https://github.com/Lkaazz/front-end-core-challenge) já preparado.
1. Clone ou baixe este repositório

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor:
```bash
npm run dev
```

A API deve estar disponível em http://localhost:3333

## 🧪 Testando a Aplicação

A API já está configurada para funcionar com o [front-end](https://github.com/Lkaazz/front-end-core-challenge). Para testar a integração:

1. Certifique-se de que esta API está rodando em http://localhost:3333

## 🛠️ Tecnologias Utilizadas

- **Express**: Framework web para Node.js
- **SQLite**: Banco de dados leve e sem servidor
- **Sequelize**: ORM para Node.js
- **Nodemon**: Reinicialização automática do servidor durante desenvolvimento

## 📊 Banco de Dados

O banco de dados SQLite é criado automaticamente na primeira execução. Não é necessário configurar um servidor de banco de dados separado.

## 🚧 Solução de Problemas

### Erro de CORS
Se você encontrar erros de CORS, verifique se a origem do seu frontend está incluída na lista de origens permitidas no arquivo `server.js` (atualmente configurado para localhost:3000 e localhost:5173).

### Banco de Dados não inicializa
Se o banco de dados não inicializar corretamente, exclua o arquivo `database.sqlite` (se existir) e reinicie o servidor.

