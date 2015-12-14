var Location =Backbone.Model.extend({
	defaults:{
		id:
		position:
	},
	initialize: function(){

	}

})

var Place=Backbone.View.extend({
	defaults:{

	},
	initialize: function(){
		success: function(){

		}
	},
	render: function(){
		
	}

});

	
$(document).ready(function(){
	if (navigator.geolocation) {
	  navigator.geolocation.getCurrentPosition(success);
	} else {
	  error('Geo Location is not supported');
	}
	console.log("fd");

});