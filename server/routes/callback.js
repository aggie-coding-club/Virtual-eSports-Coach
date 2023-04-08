const router = require('express').Router();

  router.route('/test').post((req, res) => {
    const data = req.body;
    console.log(data);
    // handle the data here
    res.send('Data received');
  });
  router.route('/get').get((req, res) => {
    console.log('get');
    res.json('Test success!')
  });
module.exports = router;

