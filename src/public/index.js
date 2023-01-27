
        const tryRequire = (path) => {
        	try {
        	const image = require(`${path}`);
        	return image
        	} catch (err) {
        	return false
        	}
        };

        export default {
        
	questionMark: require('./questionMark.png'),
	CoffeeApp_nathandumlao6VhPY27jdpsunsplash1: tryRequire('./CoffeeApp_nathandumlao6VhPY27jdpsunsplash1.png') || require('./questionMark.png'),
	CoffeeApp_lukeporterzZfuH4lINlkunsplash1: tryRequire('./CoffeeApp_lukeporterzZfuH4lINlkunsplash1.png') || require('./questionMark.png'),
	CoffeeApp_jeremyyapjnHaGWe4ywunsplash1: tryRequire('./CoffeeApp_jeremyyapjnHaGWe4ywunsplash1.png') || require('./questionMark.png'),
	CoffeeApp_eilivaceron_tSgUmeYMm8unsplash1: tryRequire('./CoffeeApp_eilivaceron_tSgUmeYMm8unsplash1.png') || require('./questionMark.png'),
	CoffeeApp_Ellipse7: tryRequire('./CoffeeApp_Ellipse7.png') || require('./questionMark.png'),
	CoffeeApp_Ellipse6: tryRequire('./CoffeeApp_Ellipse6.png') || require('./questionMark.png'),
	CoffeeApp_Ellipse11: tryRequire('./CoffeeApp_Ellipse11.png') || require('./questionMark.png'),
	CoffeeApp_christofferengstromjXZ2GgDbefwunsplash1: tryRequire('./CoffeeApp_christofferengstromjXZ2GgDbefwunsplash1.png') || require('./questionMark.png'),
	CoffeeApp_Ellipse12: tryRequire('./CoffeeApp_Ellipse12.png') || require('./questionMark.png'),
	CoffeeApp_Ellipse16: tryRequire('./CoffeeApp_Ellipse16.png') || require('./questionMark.png'),
	CoffeeApp_Ellipse15: tryRequire('./CoffeeApp_Ellipse15.png') || require('./questionMark.png'),
	CoffeeApp_Ellipse14: tryRequire('./CoffeeApp_Ellipse14.png') || require('./questionMark.png'),
	CoffeeApp_Ellipse17: tryRequire('./CoffeeApp_Ellipse17.png') || require('./questionMark.png'),
	CoffeeApp_Ellipse13: tryRequire('./CoffeeApp_Ellipse13.png') || require('./questionMark.png'),
}