var express = require('express');
var router = express.Router();

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

module.exports = router;