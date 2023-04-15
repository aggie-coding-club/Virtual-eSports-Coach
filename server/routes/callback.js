const router = require('express').Router();
const express = require('express')
router.use(express.json());
router.use(
  express.urlencoded({
    extended: true,
  })
);
  router.route('/test').post((req, res) => {
    console.log(req.body)
    res.send(req.body);
  });
  router.route('/get').get((req, res) => {
    console.log('get');
    res.json('Test success!')
  });
module.exports = router;

