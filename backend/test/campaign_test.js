var assert = require('assert');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../routes/campaign');
let should = chai.should();
chai.use(chaiHttp);

chai.use(chaiHttp);

describe('Campaigns', function() {
	describe('Read all campaign', function() {
		it('should read all campaign', (done) => {
			chai.request(server).get('/api/campaign').end((err, res) => {
				res.should.have.status(200);
				console.log('Response Body:', res.body);
				// console.log (result);
				done();
			});
		});
	});
});
