import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'


export default class UsersController {
    static async index({ response }: HttpContext) {
        const users = await User.all()
        return response.ok(users)
    }

    static async show({ response, params }: HttpContext) {
        const user = await User.find(params.id)
        return response.ok(user)
    }
}