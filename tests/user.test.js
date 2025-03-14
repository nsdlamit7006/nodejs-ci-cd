const request = require('supertest');
const app = require('../app');

test('POST /register should create user', async () => {
  const res = await request(app)
    .post('/api/users/register')
    .send({ username: 'test', password: '12345' });
    
  expect(res.status).toBe(201);
});
