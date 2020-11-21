const app = require('../routes') // Link to your server file
const supertest = require('supertest')
const request = supertest(app.default.user);

describe('Routes', () => {

  describe('User Routes', () => {
    //  having babel issues, not transforming async await
    it("Get all Users", () => {
      request.get('/').then((data) => {
      })
    })
  })
});
