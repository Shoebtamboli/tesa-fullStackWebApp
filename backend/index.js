const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');

const campaignRouter = require('./routes/campaign');

// MIDDLEWARE
app.use(cors());
app.use(express.json()); //req.body
app.use(express.urlencoded({ extended: false }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

//ROUTES

app.use('/api', campaignRouter);

// listen
app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
