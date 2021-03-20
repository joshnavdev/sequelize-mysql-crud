const request = require('supertest');
const app = require('../src/app');
const db = require('../src/models');

describe('/posts endpoints', () => {
  beforeAll(async () => {
    return db.sequelize.sync({ force: true });
  });

  it('POST - it shloud create a post', async () => {
    const res = await request(app).post('/posts').send({ content: 'First post' });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('content', 'First post');
  });

  it('POST - it should return 400 when sends empty body', async () => {
    const res = await request(app).post('/posts').send({});

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('message', 'Solicitud incorrecta');
  });

  it('POST - it should return error when server is crashed', async () => {
    await db.sequelize.close();
    const res = await request(app).post('/posts').send({ content: 'First post' });

    expect(res.statusCode).toEqual(500);
    expect(res.body).toHaveProperty('message', 'Ocurrio un error en el servidor');
    expect(res.body).toHaveProperty('error');
  });

  afterAll(() => {
    return db.sequelize.close();
  });
});
