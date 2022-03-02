
import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Guilherme',
        email: 'guisegtrab@gmail.com',
        password: '123456',
        passwaord_confirmation: '123456'
      })
      .expect(200)
  })
})
