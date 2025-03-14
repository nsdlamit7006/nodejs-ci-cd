const request = require('supertest');
const app = require('../app');
const server = require('../server');

afterAll(() => {
  server.close(); // Close server after test
});

test(
  'POST /register should create user',
  async () => {
    const res = await request(app)
      .post('/api/users/register')
      .send({ username: 'test', password: '12345' });
      
    expect(res.status).toBe(201);
  },
  10000 // Increased timeout to 10 seconds
);
