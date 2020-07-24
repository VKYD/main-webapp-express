var express = require('express');
var router = express.Router();

// var products = JSON.parse(fs.readFileSync('./data/products.json', 'utf8'));

router.get('/', function (req, res, next) {
	res.render('index', {
		title: "VKYD",
	});
});

router.get('/team', function (req, res, next) {
	res.render('featuredPages/theTeam', {
		title: "The Team | VKYD",
	});
});

router.get('/ourStory', function (req, res, next) {
	res.render('featuredPages/ourStory', {
		title: "Our Story | VKYD",
	});
});

router.get('/lookbook', function (req, res, next) {
	res.render('featuredPages/lookbook', {
		title: "The Lookbook | VKYD",
	});
});

router.get('/wallpapers', function (req, res, next) {
	res.render('featuredPages/wallpapers', {
		title: "wallpapers | VKYD",
	});
});

router.get('/login', function (req, res, next) {
	res.render('login', {
		title: "Login | VKYD",
	});
});

module.exports = router;