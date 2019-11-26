var configaa = require('./config/index.test');
require('./models/index.test').connect(configaa.dbUri);
describe('Connection', function () {
  var Company = require('mongoose').model('Company'),
    tobi = new Company({ rate: 0, source: 'TEST1', target: 'TESTT1' }),
    loki = new Company({ rate: 0, source: 'TEST2', target: 'TESTT2' }),
    jane = new Company({ rate: 0, source: 'TEST3', target: 'TESTT3' });

  beforeEach(function (done) {
    Company.create([tobi, loki, jane], done);
  });

  describe('#find()', function () {
    it('respond with matching records', function (done) {
      Company.find({ source: 'TEST1' }, function (err, res) {
        if (err) return done(err);        
        done();
      });
    });
  });
});