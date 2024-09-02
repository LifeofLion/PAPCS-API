import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { loginValidator } from '#validators/login'
import { registerValidator } from '#validators/register'

export default class AuthController {
  // Verify login credentials
  static async login({ request, response }: HttpContext) {
    try {
      const { email, password } = await request.validateUsing(loginValidator)
      const user = await User.verifyCredentials(email, password)
      const token = await User.accessTokens.create(user)
      return response.ok({
        user: user.serialize(),
        token: token.value!.release(),
      })
    } catch (error) {
      console.log(error)
      return response.status(401).send('Invalid credentials')
    }
  }

  // Register a new user
  static async register({ request, response }: HttpContext) {
    try {
      const payload = await request.validateUsing(registerValidator)
      const user = await User.create({
        ...payload
      })
      return response.created(user)
    } catch (error) {
      return response.status(400).send(error.messages)
    }
  }
}


