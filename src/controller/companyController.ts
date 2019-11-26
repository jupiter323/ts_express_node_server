const config = require('../config');
const request = require("request");

var Company: any
class CompanyController {

  constructor() {
    require('../models').connect(config.dbUri);
    Company = require('mongoose').model('Company');

  }

  list(req: any, res: any, next: any) {
    var limit = parseInt(req.query['limit'], 10);
    const pageOptions = {
      page: req.query['page'] || 1,
      limit: limit || 1000,
      sort: req.query['sort'] || 'time asc'
    };

    let filterOptions: any;
    if (req.query['filter']) {
      try {
        const filterParam = JSON.parse(req.query['filter']);
        if (Array.isArray(filterParam) && filterParam.length > 0) {
          filterParam.forEach((item) => {
            filterOptions[item.id] = new RegExp(item.value, 'i');
          });
        }
      } catch (err) {
        console.log("Could not parse \'filter\' param ")

      }
    }

    Company.paginate(filterOptions, pageOptions, (err: any, result: any) => {
      if (err) {
        console.log("error ", err)
        return res.status(500).json({
          success: false,
          errors: [JSON.stringify(err)]
        });
      }

      result.success = true;
      return res.json(result);
    });
  };


  // GET /api/companies/:id
  findById(req: any, res: any, next: any) {

    Company.findById(req.params.id, (err: any, company: any) => {
      if (err || !company) {
        if (err) console.log("error ", err)
        return res.status(404).json({
          success: false,
          errors: [err ? err.message : `company id '${req.params.id} not found'`]
        });
      }

      return res.json({
        success: true,
        data: company
      });
    });
  };

   // GET /api/companies/phone/:phone
   findByPhone(req: any, res: any, next: any) {

    Company.find({phone:req.params.phone}, (err: any, company: any) => {
      if (err || !company) {
        if (err) console.log("error ", err)
        return res.status(404).json({
          success: false,
          errors: [err ? err.message : `company phone '${req.params.phone} not found'`]
        });
      }

      return res.json({
        success: true,
        data: company
      });
    });
  };

   // GET /api/companies/name/:name
   findByName(req: any, res: any, next: any) {

    Company.find({name:req.params.name}, (err: any, company: any) => {
      if (err || !company) {
        if (err) console.log("error ", err)
        return res.status(404).json({
          success: false,
          errors: [err ? err.message : `company name '${req.params.name} not found'`]
        });
      }

      return res.json({
        success: true,
        data: company
      });
    });
  };


  // POST /api/companies
  // Add new company
  new(req: any, res: any, next: any) {
    if (!req.body.name || !req.body.phone) {
      return res.status(409).json({ success: false, errors: [' param is required'] });
    }
    var name = req.body.name;
    var phone = req.body.phone;

    Company.create({ name, phone }, (err: any) => {
      if (err) {
        return res.json({ success: false, errors: [err.message] });
      }
      res.status(200).send({ success: true, message: "data inserted" });
    })
  };

  newTRMCron() {
    return "cron working"
  }
}
module.exports = CompanyController
