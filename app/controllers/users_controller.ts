import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import hash from '@adonisjs/core/services/hash'
import { updateValidator } from '#validators/update_user'

export default class UsersController {
  // Get all users's information
  static async get_users({ response }: HttpContext) {
    const users = await User.all()
    return response.ok(users)
  }

  // Show a user's information by ID
  static async show({ response, params }: HttpContext) {
    const user = await User.find(params.id)
    if (!user) {
      return response.notFound({ message: 'User not found' })
    }
    return response.ok(user)
  }

  // Create a new user
  static async create({ request, response }: HttpContext) {
    const data = request.only(['fullName', 'email', 'password', 'role'])
    const hashedPassword = await hash.make(data.password)

    const user = await User.create({
      fullName: data.fullName,
      email: data.email,
      password: hashedPassword,
      role: data.role,
    })

    return response.created(user)
  }

  // Update an existing user
  static async update({ request, response, params }: HttpContext) {
    const user = await User.find(params.id)

    if (!user) {
      return response.notFound({ message: 'User not found' })
    }

    const data = await request.validateUsing(updateValidator)

    if (data.password) {
      data.password = await hash.make(data.password)
    }

    user.merge(data)
    await user.save()
    return response.ok(user)
  }

  // Delete a user by ID
  static async delete({ response, params }: HttpContext) {
    const user = await User.find(params.id)

    if (!user) {
      return response.notFound({ message: 'User not found' })
    }

    await user.delete()
    return response.ok({ message: 'User deleted successfully' })
  }

  // Check if user is an admin
  static async isAdmin({ response, params }: HttpContext) {
    const user = await User.find(params.id)

    if (!user) {
      return response.notFound({ message: 'User not found' })
    }

    const isAdmin = user.role === 'admin'
    return response.ok({ isAdmin })
  }
}
