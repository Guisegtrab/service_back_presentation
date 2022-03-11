import request from 'supertest'
import app from '../config/app'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'
import { Collection } from 'mongodb'
import { hash } from 'bcrypt'

let accountCollection: Collection

describe('Login Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('POST /signup', () => {
    test('Deve retornar 200 na inscrição', async () => {
      await request(app)
        .post('/api/signup')
        .send({
          name: 'Rodrigo',
          email: 'rodrigo.manguinho@gmail.com',
          password: '123',
          passwordConfirmation: '123'
        })
        .expect(200)
    })
  })

  describe('POST /login', () => {
    test('Deve retornar 200 no login', async () => {
      const password = await hash('123', 12)
      await accountCollection.insertOne({
        name: 'Rodrigo',
        email: 'rodrigo.manguinho@gmail.com',
        password
      })
      await request(app)
        .post('/api/login')
        .send({
          email: 'rodrigo.manguinho@gmail.com',
          password: '123'
        })
        .expect(200)
    })

    test('Deve retornar 401 no login', async () => {
      await request(app)
        .post('/api/login')
        .send({
          email: 'rodrigo.manguinho@gmail.com',
          password: '123'
        })
        .expect(401)
    })
  })
})
