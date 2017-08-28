var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
console.log("successfulle executed on port 3000");
module.exports = router;


