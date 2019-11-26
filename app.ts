// lib/app.ts
require('dotenv').config()
import express = require('express');
const http = require('http');
const appConfig = require('./src/config/app-config');
const routes = require('./src/web/routes');
const cronJob = require('./src/web/cron')

class Server {
    public app: any;
    public http: any;
    constructor() {
        this.app = express();
        this.http = http.Server(this.app);
       
    }

    appConfig() {
        new appConfig(this.app).includeConfig();
    }

    includeRoutes() {
        new routes(this.app).routesConfig();
        new cronJob().cronjobConfig();
    }

    appExecute() {      

        this.appConfig();
        
        
        this.includeRoutes();

        const port = process.env.PORT || 3000;
        const host = process.env.HOST || `localhost`;       

        this.http.listen(port, host, () => {
            console.log(`Listening on http://${host}:${port}`);
        });
        
    }


}

const app = new Server()

app.appExecute();
