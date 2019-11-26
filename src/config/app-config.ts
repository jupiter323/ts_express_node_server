
const expressConfig = require('./express-config');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

class AppConfig{
	public app:any
	constructor(app:any){
        this.app = app;        
	}

	includeConfig() {
        
        this.app.use(
            bodyParser.json()            
        );

        this.app.use(
            bodyParser.urlencoded({
                extended:false
            })
        );
        
        this.app.use(
        	cors()
        );
       
        
        this.app.use(
            morgan('dev')
        )            
    

		new expressConfig(this.app);
	}

}

module.exports = AppConfig;

