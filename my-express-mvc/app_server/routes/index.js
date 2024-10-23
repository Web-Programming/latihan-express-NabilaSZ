var express = require('express');
var router = express.Router();

<<<<<<< HEAD
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
=======
//panggil controller main
var mainController = require("../controllers/main");

/* GET home page. */
router.get('/', mainController.index);
router.get('/kontak', mainController.kontak);
router.get("/profil", mainController.profil);

module.exports = router;

>>>>>>> 2ec82254e836b0dae13d9b202959aedc1c8b0171
