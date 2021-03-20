const request = require('supertest');
const app = require('../src/app');
const db = require('../src/models');

describe('/posts endpoints', () => {
  beforeAll(async () => {
    return db.sequelize.sync({ force: true });
  });

  it('POST - it shloud create a post', async () => {
    const res = await request(app)
      .post('/posts')
      .send({ content: 'First post' });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('content', 'First post');
  });

  afterAll(() => {
    return db.sequelize.close();
  });
});
