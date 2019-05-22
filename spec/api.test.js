const request = require('supertest');
const app = require('../server/index.js');

describe('GET /photoGallery', () => {
  it('respond with json containing listing data',
    () => request(app)
      .get('/photoGallery')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        const listing = res.body[0];
        expect(listing).toBeDefined();
        expect(listing).toHaveProperty('imageUrl');
        expect(listing.imageUrl.length).toBeGreaterThan(0);
      }));
});
