const request = require('supertest')

const app = require('./app')
const mongoose = require('./config/mongoose')

// beforeAll(async () => {
//   const url = `mongodb://localhost:27017/test`
//   await mongoose.connect(url, { useNewUrlParser: true })
// })

describe('GET /', () => {
  it('responds with json', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        done()
      })
  })
})

afterAll(async (done) => {
  await mongoose.connection.close()
  done()
})
