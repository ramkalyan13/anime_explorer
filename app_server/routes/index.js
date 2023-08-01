var express = require('express');
var router = express.Router();
var homepageController= function(req, res) {
  res.render('index', { title: 'yokoso watashino soul society yee'});
};
router.get('/',homepageController);
module.exports = router;
