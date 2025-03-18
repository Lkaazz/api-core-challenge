const express = require('express');
const router = express.Router();
const { Task } = require('../models/Task');
const { Op } = require('sequelize');

router.get('/', async (req, res) => {
  try {
    const { search } = req.query;
    
    let whereClause = {};
    
    if (search) {
      whereClause = {
        [Op.or]: [
          { title: { [Op.like]: `%${search}%` } },
          { body: { [Op.like]: `%${search}%` } }
        ]
      };
    }
    
    const tasks = await Task.findAll({
      where: whereClause,
      order: [
        ['favorite', 'DESC'], 
        ['createdAt', 'DESC']
      ]
    });
    
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar tarefas' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, body, favorite, color } = req.body;
    
    const task = await Task.create({
      title,
      body,
      favorite: favorite || false,
      color: color || null
    });
    
    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Erro ao criar tarefa' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    
    if (!task) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar tarefa' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    
    if (!task) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    
    const { title, body, favorite, color } = req.body;
    
    await task.update({
      title: title || task.title,
      body: body || task.body,
      favorite: favorite !== undefined ? favorite : task.favorite,
      color: color !== undefined ? color : task.color
    });
    
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Erro ao atualizar tarefa' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    
    if (!task) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    
    await task.destroy();
    
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao remover tarefa' });
  }
});

router.patch('/:id/favorite', async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    
    if (!task) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    
    await task.update({ favorite: !task.favorite });
    
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao atualizar tarefa' });
  }
});

module.exports = router; 