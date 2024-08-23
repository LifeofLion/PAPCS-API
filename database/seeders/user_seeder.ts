import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const users = [
      // crée 5 users avec des données aléatoires
      {
        full_name: 'user1',
        email: 'user1@example.com',
        password: 'password1',
        created_at: new Date(),
      },
      {
        full_name: 'user2',
        email: 'user2@example.com',
        password: 'password2',
        created_at: new Date(),
      },
      {
        full_name: 'user3',
        email: 'user3@example.com',
        password: 'password3',
        created_at: new Date(),
      },
      {
        full_name: 'user4',
        email: 'user4@example.com',
        password: 'password4',
        created_at: new Date(),
      },
      {
        full_name: 'user5',
        email: 'user5@example.com',
        password: 'password5', 
        created_at: new Date(),
      },
    ]
    await this.client.table('users').insert(users)
  }
}
