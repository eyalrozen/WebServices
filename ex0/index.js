'use strict';

var eventEmitter = require('events');
var eventsConfig = require('./modules/config');
var hotel = require('./modules/Hotel');
var http = require('http');

//Create new instance of hotel
var hotelCalifornia = new hotel("California");

//Event listeners
hotelCalifornia.on(eventsConfig.events.REVIEWADDED,function(data){
	console.log(data);
});


hotelCalifornia.on(eventsConfig.events.REVIEWREMOVED,function(data){
	console.log(data);
});

hotelCalifornia.on(eventsConfig.events.ERROR,function(data){
	console.log(data);
});

hotelCalifornia.addReview();
hotelCalifornia.removeReview();
hotelCalifornia.removeReview();
hotelCalifornia.addReview();
hotelCalifornia.addReview();
//Create server and listen to port 8080 for requests. returns the logger messages
http.createServer(function(req, res){
res.writeHead(200);// status code 200= ok
res.write(hotelCalifornia.printLogger());
res.end();
}).listen(8080);


