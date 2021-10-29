import request from 'supertest'
import app from '../config/app'

describe('Content Type Middleware', () => {
  it('should return content type as json', async () => {
    app.get('/test_content_type', (req, res) => {
      res.send()
    })
    await request(app)
      .get('/test_content_type')
      .expect('content-type', /json/)
  })
})
