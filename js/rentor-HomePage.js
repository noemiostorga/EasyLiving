module.exports={

var Rooms = Backbone.Model.extend({
	initialize: function(){

	}, defualts: {
		image_url: null
	},
		_parse_class_name: "Room"

})

var Room = Backbone.Collection.extend({
	model: Rooms,
	_parse_class_name: "Room"
});

var ImageCollection = new Room();

ImageCollection.fetch({
	success: function(resp){

	},
	error: function(err){
		console.log(err);
	}
});


////////////////////////

var Renter = Backbone.Router.extend({
	initialize: function(){

		Backbone.history.start({pushState: true});
	},
		routes: {
			"messages/": "message",
			"profile": "profile",
			" " : "index"

		}
});




var router = new Router();

	router.on('route: profile', function(objectId){
		var profile: new({objectId: objectId});
		profile.fetch({
			success: fucntion(resp){

			}
		})
	});


/*var SignupRentee= Backbone.Model.extend({
	document.getElementById("Signup-firstname").val();
	document.getElementById("signup-lastname".val();
	document.getElementById("signup-email").val();
	document.getElementById("signup-passsword").val();
	document.getElementById("signup-confirm").val();	
})

*/
var renter_view = new Renter({el: $("#view_container")});



}