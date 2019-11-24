

// Подключаем dev-dependencies
const supertest = require('supertest');
const app = require('../app');
// const {expect} = require('chai');
require('dotenv').config();

describe('Spec test', () => {
  let request;
  let server;
  before(() => {
    server = app.listen(process.env.PORT || '3001');
  });
  after(() => {
    server.close();
  });
  beforeEach(() => {
    request = supertest(server);
  });
  describe('api/customers/login', () => {
    it('should return 200', async () => {
      const user = {
        login: 'sales@petz.com.ua',
        password: '123456',
      };
      const body = await request.post('/api/customers/login')
          .send(user)
          .expect(200);
    });
  });
});
