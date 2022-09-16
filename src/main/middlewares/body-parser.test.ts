import app from '../config/app'
import request from 'supertest'

describe('Body parser Middleware', () => {
  test('Should parse body as json', async () => {
    app.post('/test_body_parse', (req, res) => {
      res.send(req.body)
    })

    await request(app)
      .post('/test_body_parse')
      .send({ name: 'Ricardo' })
      .expect({ name: 'Ricardo' })
  })
})
