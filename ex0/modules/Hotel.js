'use strict';

var eventEmitter = require('events');
var eventsConfig = require('./config');

var logger = '';

module.exports = class Hotel extends eventEmitter{
	constructor(hotelName){
		super(); 				//inheritance
		this.type = "Hotel";	//Object type is Hotel
		this.name = hotelName;
		this.reviews = 0;
		this.info = `${this.type} ${this.name} has `;
	}

//Increment hotel reviews by 1
	addReview(){
		this.reviews++;
		console.log('Review added! ');
		logger += '\nReview added! \n'+this.info + this.reviews + ' reviews'; // add the console log message to logger
		this.emit(eventsConfig.events.REVIEWADDED,this.info + this.reviews + ' reviews'); //fires event with message
	}

//Decrease amount of reviews by 1 if the review amount is bigger then 0
	removeReview(){
		if(this.reviews >0){
			this.reviews--;
			console.log('Review Removed!');
			logger +='\nReview Removed! \n'+this.info + this.reviews + ' reviews' // add the console log message to logger
			this.emit(eventsConfig.events.REVIEWREMOVED,this.info + this.reviews + ' reviews');//fires event with message
		}
		else{ //Trying to decrease the amount of reviews while the amount is 0
			console.log('Current amount of review is 0, unable to decrease it');
			var noReviewsError = 'Amount of reviews cannot be < 0 !';
			logger += '\nCurrent amount of review is 0, unable to decrease it\n'+noReviewsError; // add the console log message to logger
			this.emit(eventsConfig.events.ERROR,noReviewsError); //fires event with message
		}	
	}

//Return all the console log messages 
	printLogger(){
		return logger;
	}
}