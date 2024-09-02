/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import UsersController from '#controllers/users_controller'
import AuthController from '#controllers/auth_controller'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router
  .group(() => {
    router.get('/', UsersController.get_users)
    router.post('create', UsersController.create)
    router.put('update/:id', UsersController.update)
    router.get('isAdmin/:id/', UsersController.isAdmin)
    router.delete('delete/:id', UsersController.delete)
    router.get('show/:id', UsersController.show)
  })
  .prefix('users')

router
  .group(() => {
    
    router.post('login', AuthController.login)
    router.post('register', AuthController.register)
  })
  .prefix('auth')