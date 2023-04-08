const router = require('express').Router();

  router.route('/test').post((req, res) => {
    console.log(JSON.stringify(req.body));
    // handle the data here
    res.send('Data received');
  });
  router.route('/get').get((req, res) => {
    console.log('get');
    res.json('Test success!')
  });
module.exports = router;

