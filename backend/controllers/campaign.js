const pool = require('../db');

const createCampaign = async (req, res) => {
	try {
		const { campaign_title, status, creation_date, creation_user } = req.body;
		const text =
			'INSERT INTO campaign (campaign_title, status, creation_date, creation_user) VALUES($1, $2, $3, $4) RETURNING *';
		const values = [ campaign_title, status, creation_date, creation_user ];
		const newCampaign = await pool.query(text, values);

		res.status(201).json(newCampaign.rows[0]);
	} catch (err) {
		//console.status(400).error('Error: ' + err.message);
		console.error(err.message);
	}
};

const getAllCampaign = async (req, res) => {
	try {
		const text = 'SELECT * FROM campaign';
		const allCampaigns = await pool.query(text);
		res.status(200).json(allCampaigns.rows);
	} catch (err) {
		console.error(err.message);
		res.status(400).json('No data in the table');
	}
};

const getCampaignById = async (req, res) => {
	try {
		const { id } = req.params;
		const text = 'SELECT * FROM campaign WHERE campaign_id = $1';
		const values = [ id ];
		const campaign = await pool.query(text, values);

		res.status(200).json(campaign.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
};

const updateCampaignById = async (req, res) => {
	try {
		console.log('BODY', req.body);
		console.log(req.params);
		const { id } = req.params;
		const { campaign_title, status, creation_date, creation_user } = req.body;
		const text =
			'UPDATE campaign SET campaign_title = $1, status = $2, creation_date = $3, creation_user = $4  WHERE campaign_id = $5';
		const values = [ campaign_title, status, creation_date, creation_user, id ];
		const updateCampaign = await pool.query(text, values);

		console.log(updateCampaign);
		res.status(201).json('Campaign was updated!');
	} catch (err) {
		console.error(err.message);
	}
};

const deleteCampaignById = async (req, res) => {
	try {
		const { id } = req.params;
		const text = 'DELETE FROM campaign WHERE campaign_id = $1';
		const values = [ id ];
		const deleteCampaign = await pool.query(text, values);
		res.status(202).json('Campaign was deleted!');
	} catch (err) {
		console.log(err.message);
	}
};

module.exports = {
	createCampaign,
	getAllCampaign,
	getCampaignById,
	updateCampaignById,
	deleteCampaignById
};
