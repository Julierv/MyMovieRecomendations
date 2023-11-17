const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/server'); // Import your server instance
const expect = chai.expect;

chai.use(chaiHttp);

describe('API Routes', () => {
  it('should return an array of random items', async () => {
    const res = await chai.request(server).get('/api/getRandomItems');
    expect(res).to.have.status(200);
    expect(res.body).to.be.an('array');
  });
});