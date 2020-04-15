var https = require('https');
var querystring = require('querystring');

function request(id,callback) {
    var path = `/v1/checkouts/${id}/payment`;
    path += '?entityId=8a8294174d0595bb014d05d82e5b01d2';
    var options = {
        port: 443,
        host: 'test.oppwa.com',
        path: path,
        method: 'GET',
        headers: {
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
    postRequest.end();
}

module.exports = async (req, res, next) => {
    console.log('--------------------------------');
    
    const { id } = req.body;
    console.log({ id });
    request(id,function (responseData) {
        // save ya nariman here to databasse resultDetails&card
        console.log(responseData);
        res.JSON({success:true})
    });
}