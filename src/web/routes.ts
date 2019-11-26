/*
* @author Shashank Tiwari
*/

'use strict';

var trmRoute = require('../routes/trm');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

class Routes {
	public app:any
	constructor(app:any) {
		this.app = app;
	}

	/* creating app Routes starts */
	appRoutes() {
		this.app.use('/api/companies', trmRoute);
		this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
	}

	routesConfig() {
		this.appRoutes();
	}
}
module.exports = Routes;