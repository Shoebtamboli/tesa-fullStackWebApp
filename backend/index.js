const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const campaignRouter = require('./routes/campaign');

app.use(cors());
app.use(express.json()); //req.body
app.use(express.urlencoded({ extended: false }));

//ROUTES

app.use('/api', campaignRouter);

// listen
app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
