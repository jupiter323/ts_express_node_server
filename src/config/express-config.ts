var express = require('express')
var path = require('path')
import cors = require("cors");
class ExpressConfig {

	constructor(app:any) {
		// Setting .html as the default template extension
		app.set('view engine', 'html');

		//Files 
		app.use("/public", express.static(path.join('public')));	
		app.use(cors());
		app.use(express.urlencoded({ extended: false }));
		app.use(express.json());

	}
}
module.exports = ExpressConfig;
