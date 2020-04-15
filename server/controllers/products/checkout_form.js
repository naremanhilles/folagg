var https = require('https');
var querystring = require('querystring');

var axios = require('axios');

module.exports = async (req, res, next) => {
	const { amount } = req.body;
	request(amount,function (responseData) {
		// console.log(responseData.id);
		res.json({ success: true, id: responseData.id || '' });
	});

};
function request(amount,callback) {
	var path = '/v1/checkouts';
	var data = querystring.stringify({
		'entityId': '8a8294174d0595bb014d05d82e5b01d2',
		'amount': amount,
		'currency': 'SAR',
		'paymentType': 'DB'
	});
	var options = {
		port: 443,
		host: 'test.oppwa.com',
		path: path,
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Content-Length': data.length,
			'Authorization': 'Bearer OGE4Mjk0MTc0ZDA1OTViYjAxNGQwNWQ4MjllNzAxZDF8OVRuSlBjMm45aA=='
		}
	};
	var postRequest = https.request(options, function (res) {
		res.setEncoding('utf8');
		res.on('data', function (chunk) {
			jsonRes = JSON.parse(chunk);
			return callback(jsonRes);
		});
	});
	postRequest.write(data);
	postRequest.end();
}

