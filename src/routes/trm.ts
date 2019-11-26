const router = require('express').Router();
const CompanyClass = require('../controller/companyController')
var company = new CompanyClass()

router.get('/', company.list);
router.post('/', company.new);

router.get('/:id', company.findById)
router.get('/phone/:phone', company.findByPhone)
router.get('/name/:name', company.findByName)

module.exports = router;