var express = require('express');
var router = express.Router();

const quizcontroller = require("../controllers/quiz"); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET quizzes page. */
router.get('/quizzes', quizcontroller.index );

/* GET credits page. */
router.get('/credits', function(req, res, next) {
  res.render('credits');
});

module.exports = router;
