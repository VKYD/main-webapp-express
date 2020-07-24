var express = require('express');
var router = express.Router();

var fs = require('fs');

var products = JSON.parse(fs.readFileSync('./data/products.json', 'utf8'));

router.get('/product/:id', function (req, res, next) {
	var id = req.params.id; //Unique product ID
	id = id.toString();
	console.log(products[id]["title"]);
	res.render('productTemplate', {
		title: products[id]["title"] + " | VKYD",
		product: {
			name: products[id]["product"]["name"], //Name of product
			price: products[id]["product"]["price"], //Price of the product
			// buyActionLink: "/add/"+id //Dunno what this will be
		},
		designer: {
			name: products[id]["designer"]["name"], //Designer's name
			url: products[id]["designer"]["url"] //Designer's profile URL
		},
		media: {
			render: "/media/products/"+id+"/render.mp4", //Leave untouched
			img1: "/media/products/"+id+"/1.jpg", //Leave untouched
			img2: "/media/products/"+id+"/2.jpg", //Leave untouched
			img3: "/media/products/"+id+"/3.jpg", //Leave untouched
			img4: "/media/products/"+id+"/4.jpg", //Leave untouched
			img5: "/media/products/"+id+"/5.jpg" //Leave untouched
		},
		content: {
			para1: products[id]["content"]["para1"],
			para2: products[id]["content"]["para2"],
			para3: products[id]["content"]["para3"],
			para4: products[id]["content"]["para4"],
			para5: products[id]["content"]["para5"],
			snapchatTryURL: products[id]["content"]["snapchatTryURL"],
			instagramTryURL: products[id]["content"]["instagramTryURL"],
			copyLinkURL: products[id]["content"]["copyLinkURL"],
			snapchatShareURL: products[id]["content"]["snapchatShareURL"],
			instagramShareUR: products[id]["content"]["instagramShareUR"],
			whatsappShareURL: products[id]["content"]["whatsappShareURL"]
		}
	});
});


module.exports = router;