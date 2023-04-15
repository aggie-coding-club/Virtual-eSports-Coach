const router = require('express').Router();
const axios = require('axios')
  router.route('/puuid').post((req, res) => {
    console.log(req.body);
    axios.get(`https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${req.body.user}/${req.body.tag}?api_key=RGAPI-663a7a7a-8389-473f-b10a-5681c7882f0a`)
    .then((response) => {
      res.send(response);
    }).catch(err => res.status(400).json('Error: ' + err));
    
  });
module.exports = router;




