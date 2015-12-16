var Backbone = require('../backbone-parse');
var Put = require('../models/put');

var PutCollection = Backbone.Collection.extend({
	model: Out, 
	_parse_class_name: "Rooms"
});

var Puts = new PutCollection();

module.exports = Puts;