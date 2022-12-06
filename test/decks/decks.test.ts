import app from '../../../card-and-deck-app/src/app';
import supertest from 'supertest';
import { expect } from 'chai';

const uuid = `ab86d780-7539-11ed-8217-b7f7f2cafe88`;
const invalidUUID = `test`;

const createDeckBody = {
    type: `FULL`,
    shuffled: false,
};

const createDeckInvalidTypeBody = {
    type: `test`,
    shuffled: false,
};

describe('create deck endpoint', function () {
    let request: supertest.SuperAgentTest;
    before(function () {
        request = supertest.agent(app);
    });

    it('should allow a POST to /api/create/deck', async function () {
        const res = await request.post('/api/create/deck').send(createDeckBody);

        expect(res.status).to.equal(200);
        expect(res.body).not.to.be.empty;
        expect(res.body).to.be.an('object');
    });

    it('should give error with invalid type a POST to /api/create/deck', async function () {
        const res = await request.post('/api/create/deck').send(createDeckInvalidTypeBody);

        expect(res.status).to.equal(400);
    });

    it('should allow a GET to /api/get/deck-by-id/:uuid', async function () {
        const res = await request.get(`/api/get/deck-by-id/${uuid}`).send();

        expect(res.status).to.equal(200);
        expect(res.body).not.to.be.empty;
        expect(res.body).to.be.an('object');
    });

    it('should give error with invalid UUID type a GET to /api/get/deck-by-id/:uuid', async function () {
        const res = await request.get(`/api/get/deck-by-id/${invalidUUID}`).send();

        expect(res.status).to.equal(400);
    });
});