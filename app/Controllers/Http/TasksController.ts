import { HttpContext } from '@adonisjs/core/http'
import Task from 'App/Models/Task'

export default class TasksController {
 
  public async index({ request, response }: HttpContext) {
    const search = request.input('search')
    
    let query = Task.query()
    
    if (search) {
      query = query.where('title', 'LIKE', `%${search}%`)
        .orWhere('body', 'LIKE', `%${search}%`)
    }
    
    const tasks = await query.orderBy('createdAt', 'desc')
    return response.json(tasks)
  }
  
  public async store({ request, response }: HttpContext) {
    const data = request.only(['title', 'body', 'favorite', 'color'])
    const task = await Task.create(data)
    
    return response.status(201).json(task)
  }
  
  public async show({ params, response }: HttpContext) {
    const task = await Task.find(params.id)
    
    if (!task) {
      return response.status(404).json({ 
        message: 'Tarefa não encontrada' 
      })
    }
    
    return response.json(task)
  }
  
  public async update({ params, request, response }: HttpContext) {
    const task = await Task.find(params.id)
    
    if (!task) {
      return response.status(404).json({ 
        message: 'Tarefa não encontrada' 
      })
    }
    
    const data = request.only(['title', 'body', 'favorite', 'color'])
    task.merge(data)
    await task.save()
    
    return response.json(task)
  }
  
  public async destroy({ params, response }: HttpContext) {
    const task = await Task.find(params.id)
    
    if (!task) {
      return response.status(404).json({ 
        message: 'Tarefa não encontrada' 
      })
    }
    
    await task.delete()
    
    return response.status(204).json(null)
  }
  
  public async toggleFavorite({ params, response }: HttpContext) {
    const task = await Task.find(params.id)
    
    if (!task) {
      return response.status(404).json({ 
        message: 'Tarefa não encontrada' 
      })
    }
    
    task.favorite = !task.favorite
    await task.save()
    
    return response.json(task)
  }
} 