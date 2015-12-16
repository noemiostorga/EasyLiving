var Backbone = require('./backbone-parse');
var mainTemplate = require('./signup.js');

var Router = Backbone.Router.extend({
	initialize: function(){
		Backbone.history.start({pushState: true});
	},
	routes: {
		"signup/": "",
		"": "",
		"":"index"
	},
	index: function(){

	}
});


var