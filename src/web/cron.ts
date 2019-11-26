var cron = require('node-cron');
var CompanyContoller = require('../controller/companyController')
class CronJob {

    constructor() {
        var pointsObj = new Object()
    }

    cronJobs() {

        cron.schedule('0 7 * * *', async () => {
            var cc = new CompanyContoller();
            const refresh = cc.newTRMCron()

            console.log('TRM refresh every day 7AM', refresh);
        }, {
            scheduled: true,
            timezone: "America/Sao_Paulo"
        });

    }

    cronjobConfig() {
        this.cronJobs();
    }
}
module.exports = CronJob;
