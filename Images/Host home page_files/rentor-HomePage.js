(function(){

	Parse.$ = jQuery;

	Parse.initialize("8FursUpxatbb97bkZXQo0UOhEveyAvcOU2UNs7ZV", "nCv32lT0DhjotclrySOuLi6iAR4LCyrKE3y130Xg");

	var View = Backbone.View.extend({
		initialize: function(){
			console.log("initialize");
		}
	});


	/*var RenterView = Backbone.View.extend({

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
			var RoomImages= $("#RoomImages").get(url);
			var roomImages= $("#roomImages").get(url);
			console.log(url);



			var Rooms = Parse.Object.extend("Rooms");
			var rooms = new Rooms();

			room.save({


				user: Parse.User.current()
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
			var info = {
				///
			}
			var imageTemplate = $("#Image-Template").text();
			var imageHTML = Mustache.render(imageTemplate, data);
			this.$el.html(imageHTML);
			this.delegateEvents();
		}

	});


	var ManageRenterView= Backbone.View.extend({
		events: {
			"submit form.userprofile-form": "createRenterView"
		},
		el: ".content",

		initialize: function(){
			_.bindAll(this, "createRenterView");
			this.render();
		},

		createRenterView: function(){
			new createRenterView();
			this.undelegateEvents();
			return false;
		}
		render: function(){
			var Renter = this;

			var User = Parse.User.current();
			var Rooms = Parse.Object.extend("Room");

			var query = new Parse.Query.User();


		}
	});


/////////////// */
	

})();
