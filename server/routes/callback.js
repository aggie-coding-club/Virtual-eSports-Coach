const router = require('express').Router();

  router.route('/test').post((req, res) => {
    res.send(JSON.stringify(req.body));
    // handle the data here
    res.send('Data received');
  });
  router.route('/get').get((req, res) => {
    console.log('get');
    res.json('Test success!')
  });
module.exports = router;

