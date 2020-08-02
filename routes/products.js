var express = require('express');
var router = express.Router();

var fs = require('fs');

var products = JSON.parse(fs.readFileSync('./data/products.json', 'utf8'));

router.get('/product/:id', function (req, res, next) {
	var id = req.params.id; //Unique product ID
	id = id.toString();
	res.render('productTemplate', {
		title: products[id]["title"] + " | VKYD",
		product: {
			id: id,
			name: products[id]["product"]["name"], //Name of product
			price: products[id]["product"]["price"], //Price of the product
			sizes: products[id]["product"]["sizes"]
		},
		designer: {
			name: products[id]["designer"]["name"], //Designer's name
			url: products[id]["designer"]["url"] //Designer's profile URL
		},
		content: {
			para1: products[id]["content"]["para1"],
			para2: products[id]["content"]["para2"],
			para3: products[id]["content"]["para3"],
			para4: products[id]["content"]["para4"],
			para5: products[id]["content"]["para5"],
			cartDescription: products[id]["content"]["cartDescription"],
			snapchatTryURL: products[id]["content"]["snapchatTryURL"],
			instagramTryURL: products[id]["content"]["instagramTryURL"],
			copyLinkURL: products[id]["content"]["copyLinkURL"],
			snapchatShareURL: products[id]["content"]["snapchatShareURL"],
			// instagramShareUR: products[id]["content"]["instagramShareUR"],
			whatsappShareURL: products[id]["content"]["whatsappShareURL"]
		}
	});
});


module.exports = router;