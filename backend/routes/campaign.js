const router = require('express').Router();
const campaignController = require('../controllers/campaign');

router.get('/campaign', campaignController.getAllCampaign);

router.post('/campaign', campaignController.createCampaign);

router.get('/campaign/:id', campaignController.getCampaignById);

router.put('/campaign/:id', campaignController.updateCampaignById);

router.delete('/campaign/:id', campaignController.deleteCampaignById);

module.exports = router;
