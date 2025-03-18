const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models/Task');
const tasksRoutes = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 3333;

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  credentials: true
}));
app.use(express.json());

app.use('/api/tasks', tasksRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'API de Tarefas está funcionando!' });
});

async function initServer() {
  try {
    await sequelize.sync({ alter: true });
    console.log('Banco de dados sincronizado');
    
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error('Erro ao iniciar o servidor:', error);
  }
}

initServer(); 