(function(){

	Parse.$ = jQuery;

	Parse.initialize("8FursUpxatbb97bkZXQo0UOhEveyAvcOU2UNs7ZV", "nCv32lT0DhjotclrySOuLi6iAR4LCyrKE3y130Xg");


	var RenterView = Backbone.View.extend({

	events: {
		"submit form.userprofile-form": "createRenterView",
	},

	el:".content",

	initialize: function(){
		_.bindAll(this, "createRenterView");
		this.render();
	},
	createRenterView: function(e){
		var Renter = this;
		//use mustache here
		var RoomImages= $("#RoomImages").val();
		var roomImages= $("#roomImages").val();



		var Rooms = Parse.Object.extend("Rooms");
		var rooms = new Rooms();

		room.save({



		}).then(function(result){
			new AppView();
		}, function(error){
			renter.$(".userprofile-form .error").html(_.escape(error.message)).show();
			renter.$(".userprofile-form button").removeAttr("disabled");
		});

		this.$(".userprofile-form button").attr("disabled", "disabled");

		return false;

	},

	render: function(){
		var 
	}


///////////////
		roomImages.set("url",  "http://www.arrowwoodresort.com/up/gallery/exec_family_room.jpg");
		roomImages.save(null, {
			success: function(roomImages){
				alert("done");
			},
			error: function(roomImages, error){
				alert("image not found");
				error.message
			}
		});

		var RenterProfile = Parse.Object.extend("RenterProfile");
		var renterProfile = new RenterProfile();

		renterProfile.save({
			//save whatever likes the renter likes

		}).then(function(result){

			new AppView();

		});
		
	},

	render: function(data){
			var Renterdata = {
				//console.log("this work");
			}
	}

	/*var RenterTemplate = $("#renter-homepageTemp").text();
	var TempHTMLRenter = Mustache.render(RenterTemplate, Renterdata);	
	this.$el.html(TempHTMLRenter);
	this.delegateEvents();
	
	},


});/*



















/*module.exports={

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
var renter_view = new Renter({el: $("#view_container")});
*/



})();
