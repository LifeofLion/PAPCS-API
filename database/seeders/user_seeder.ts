import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Hash from '@adonisjs/core/services/hash'

export default class extends BaseSeeder {
  async run() {
    const users = [
      {
        full_name: 'user1',
        email: 'user1@example.com',
        password: await Hash.make('password1'),
        role: 'user',
        created_at: new Date(),
      },
      {
        full_name: 'user2',
        email: 'user2@example.com',
        password: await Hash.make('password2'),
        role: 'user',
        created_at: new Date(),
      },
      {
        full_name: 'user3',
        email: 'user3@example.com',
        password: await Hash.make('password3'),
        role: 'user',
        created_at: new Date(),
      },
      {
        full_name: 'user4',
        email: 'user4@example.com',
        password: await Hash.make('password4'),
        role: 'user',
        created_at: new Date(),
      },
      {
        full_name: 'user5',
        email: 'user5@example.com',
        password: await Hash.make('password5'),
        role: 'user',
        created_at: new Date(),
      },
    ]
    await this.client.table('users').insert(users)
  }
}
