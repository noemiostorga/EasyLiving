
//Parse.initialize("8FursUpxatbb97bkZXQo0UOhEveyAvcOU2UNs7ZV", "nCv32lT0DhjotclrySOuLi6iAR4LCyrKE3y130Xg");




var RenterView = Backbone.View.extend({

	events: {
		"submit form.userprofile-form": "createRenterView",
	},

	el:".content",

	initialize: function(){
		_.bindAll(this, "createRenterView");
		this.render();
	},
	createRenterView: function(){
		//use mustache here

		var UserProfile = Parse.Object.extend("UserProfile");
		var query = new Parse.Object.extend("UserProfile");
		query.equalTo("renter", "noemi");
		query.find({
			success: function(results){
				alert("Successfully retrieved" + results.length + " rooms.");

				for(var i=0; i < results.length; i++){
					alert("hey" + objectId);
				}
			}
			query.containedIn("UserProfile",["Monica", "Noemi"])
		});
		var userProfile = new UserProfile();

		var Renter = Parse.Object.extend("user",{
			hasGender: function(){
				return this.get("ageGroup") /* > 18-30? make age groups like this*/ ;
			},
			initialize: function(attrs, options){
				console.log("hey");
			}
		

		/*Parse.Object.registerSubclass();*/
		});
		var UserProfile = Parse.Object.extend("users");
		var userProfile = new UserProfile();

		userProfile.set("score, 1337");
		userProfile.set("player", "1887");
		userProfile.set("cheatmode", false);

		userProfile.save(null, {
			success: function()
				alert("hey");
		});

			error: function(){
				alert("hey");
			}
		alert('')
	},
	render: function(data){

			var Renterdata = {
				console.log("this work");
			},
	}

	var RenterTemplate = $("#renter-homepageTemp").text();
	var TempHTMLRenter = Mustache.render(RenterTemplate, Renterdata);	
	this.$el.html(TempHTMLRenter);
	this.delegateEvents();
	
	},


});

		/*userProfile.set("url",  "http://www.arrowwoodresort.com/up/gallery/exec_family_room.jpg");
		userProfile.save(null, {
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

	


});


