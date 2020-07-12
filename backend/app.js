const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

//const swaggerJsDoc = require('swagger-jsdoc');
//const swaggerUi = require('swagger-ui-express');

const campaignRouter = require('./routes/campaign');
/*
const swaggerOptions = {
	swaggerDefinition: {
		info: {
			title: 'Campaign API',
			description: 'Campaign API information.',
			contact: {
				name: 'Campaign API support'
			},
			servers: [ 'http://localhost:5000' ],
			version: '1.0.1'
		}
	},
	//apis: [.routes/*.js]
	apis: [ 'app.js' ]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
*/
//middleware
app.use(cors());
app.use(express.json()); //req.body
app.use(express.urlencoded({ extended: false }));

//ROUTES

app.use('/api', campaignRouter);

// listen
app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
