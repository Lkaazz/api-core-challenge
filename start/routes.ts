import router from '@adonisjs/core/services/router'

const apiRoutes = router.group(() => {
  router.get('/tasks', 'TasksController.index')
  router.post('/tasks', 'TasksController.store')
  router.get('/tasks/:id', 'TasksController.show')
  router.put('/tasks/:id', 'TasksController.update')
  router.delete('/tasks/:id', 'TasksController.destroy')
  router.patch('/tasks/:id/favorite', 'TasksController.toggleFavorite')
}).prefix('/api')

export default apiRoutes 