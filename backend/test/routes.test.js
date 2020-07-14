const request = require('supertest');
const app = require('../index');

describe('Campaign Endpoints', () => {
	it('should create a new campaign', async () => {
		const res = await request(app).post('/api/campaign').send({
			campaign_title: 'Mustertitel',
			status: 'geplant',
			creation_date: '2020-04-07T14:00:00',
			creation_user: 'Max Mustermann'
		});
		expect(res.status).toEqual(201);
		expect(res.body.campaign_title).toEqual('Mustertitel');
	});

	it('should fetch a single campaign', async () => {
		const campaignId = 3;
		const res = await request(app).get(`/api/campaign/${campaignId}`);

		expect(res.status).toEqual(200);
		expect(res.body.campaign_id).toEqual(campaignId);
	});

	it('should fetch all campaign', async () => {
		const res = await request(app).get('/api/campaign');
		expect(res.status).toEqual(200);
	});

	it('should update a campaign', async () => {
		const campaignId = 3;
		const res = await request(app).put(`/api/campaign/${campaignId}`).send({
			campaign_title: 'Mustertitel',
			status: 'geplant',
			creation_date: '2020-04-07T14:00:00',
			creation_user: 'test'
		});
		expect(res.status).toEqual(200);
	});

	it('should delete a campaign', async () => {
		const campaignId = 4;
		const res = await request(app).delete(`/api/campaign/${campaignId}`);
		expect(res.status).toEqual(202);
	});
});
