import app from '../../../card-and-deck-app/src/app';
import supertest from 'supertest';
import { expect } from 'chai';

const drawCardBody = {
    uuid: `ab86d780-7539-11ed-8217-b7f7f2cafe88`,
    count: 5,
};

const drawCardBodyInvalidUUID = {
    uuid: `ab86d780-7539`,
    count: 5,
};

const drawCardBodyEmptyCount = {
    uuid: `ab86d780-7539-11ed-8217-b7f7f2cafe88`,
};

describe('cards endpoint', function () {
    let request: supertest.SuperAgentTest;
    before(function () {
        request = supertest.agent(app);
    });

    it('should allow a POST to /api/create/draw-card', async function () {
        const res = await request.post('/api/create/draw-card').send(drawCardBody);

        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
    });

    it('should give error with invalid UUID a POST to /api/create/draw-card', async function () {
        const res = await request.post('/api/create/draw-card').send(drawCardBodyInvalidUUID);

        expect(res.status).to.equal(400);
    });

    it('should give error with empty count a POST to /api/create/draw-card', async function () {
        const res = await request.post('/api/create/draw-card').send(drawCardBodyEmptyCount);

        expect(res.status).to.equal(400);
    });
});