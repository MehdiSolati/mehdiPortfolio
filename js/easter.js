function doge() {
	var shapes = {
			"w_rect": ["dogeDough.jpg", "wizardOfDoge.gif", "dogeDance.gif", "dogeCoin.gif", "batDoge.gif", "coldDoge.gif"],
			"t_rect": ["dogeDonut.jpg", "dogeSelfie.jpg", "dogeSnap.jpg", "dogeGuard.jpg"],
			"square": ["dogeIntensifies.gif", "dogeWords.jpg", "dogeEatDoge.jpg", "dogeTrump.jpg", "dogeShakeSpace.gif"]
		},
		img_path = "http://www.mehdisolati.com/images/doge/";

	function chooseImg(shape) {
		return img_path + shapes[shape][Math.floor(Math.random() * shapes[shape].length)]
	}

	function getShape(h, w) {
		return h === w ? "square" : h > w ? "t_rect" : "w_rect"
	}
	var imgs = document.getElementsByTagName("img"),
		img, h, w, shape;
	for (var i = 0, len = imgs.length; i < len; i++) {
		img = imgs[i], h = img.height, w = img.width, s = getShape(h, w);
		img.setAttribute("height", h);
		img.setAttribute("width", w);
		img.src = chooseImg(s)
	};

	
	$(profilePic).attr("src", "http://www.mehdisolati.com/images/doge/profile.jpg");
	return void 0;
}