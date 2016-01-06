(function() {

  Parse.$ = jQuery;

  Parse.initialize("8FursUpxatbb97bkZXQo0UOhEveyAvcOU2UNs7ZV", "nCv32lT0DhjotclrySOuLi6iAR4LCyrKE3y130Xg");

 /*var ManageRenterView = Backbone.View.extend({
    events: {
      "submit form.renter-form": "createListing",
    },

    el: ".content",

    initialize: function(){
      _.bindAll(this, "createListing"),
      this.render();
    },

    createListing: function(e){
      new CreateListingView();
      this.undelegateEvents();
      return false;
    },

    render: function(){

    }

  })*/

  var CreateListingView = Backbone.View.extend({
    events: {
      "submit form.create-listing-form": "createListing",
    },

    el: ".content",
    
    initialize: function() {
      _.bindAll(this, "createListing");
      this.render();
    },

    createListing: function(e) {

      // Capture form input
      var self = this;

      var title = $('input[name=title]').val();
      var address = $('input[name=address]').val();
      var city = $('input[name=city]').val();
      var state = $('input[name=state]').val();
      var zipCode = $('input[name=zipCode]').val();
      var price = parseInt($('input[name=price]').val());
      var sqft = $('input[name=sqft]').val();
      var description = $('textarea[name=description]').val();

      // amenities
      var washerDryer = $('input[name=washerDryer]').is(':checked');
      var pool = $('input[name=pool]').is(':checked');
      var privateBathroom = $('input[name=privateBathroom]').is(':checked');
      var furnished = $('input[name=furnished]').is(':checked');
      
      // restrictions
      var noSmoking = $('input[name=noSmoking]').is(':checked');
      var noKids = $('input[name=noKids]').is(':checked');
      var noPets = $('input[name=noPets]').is(':checked');

      // Instantiate the object we're going to create in Parse
      var Room = Parse.Object.extend("Room");
      var room = new Room();

        // Save the object instance to Parse
        room.save({
          title: title,
          address: address,
          city: city,
          state: state,
          zipCode: zipCode,
          price: price,
          sqft: sqft,
          description: description,
          privateBathroom: privateBathroom,
          pool: pool,
          washerDryer: washerDryer,
          furnished: furnished,
          noSmoking: noSmoking,
          noKids: noKids,
          noPets: noPets,
          user: Parse.User.current()     
        }).then(function(result) {
          window.location = "host.html";
        }, function(error) {
            self.$(".create-listing-form .error").html(_.escape(error.message)).show();
            self.$(".create-listing-form button").removeAttr("disabled");

        });

        this.$(".create-listing-form button").attr("disabled", "disabled");
        
        return false;
      },

      // This renders the view
      render: function() {
        var data = {
          fields: [
            {name: "title",
              description: "Listing Title",
              type: "text"},
            {name: "address",
              description: "Address",
              type: "text"},
            {name: "city",
              description: "City",
              type: "text"},
            {name: "state",
              description: "State",
              type: "text"},
            {name: "zipCode",
              description: "Zipcode",
              type: "text"},
            {name: "price",
              description: "Price",
              type: "text"},
            {name: "sqft",
              description: "Sqft",
              type: "text"},
          ],
          amenities: [
            { description: "Private Bathroom",
              value: "privateBathroom"},
            { description: "Furnished",
              value: "furnished"},
            { description: "Pool",
              value: "pool"},
            { description: "Washer & Dryer",
              value: "washerDryer"},

          ],
          restrictions: [
            { description: "No smoking",
              value: "noSmoking"
            },
            { description: "No kids",
              value: "noKids"
            },
            { description: "No pets",
              value: "noPets"
            }
          ]

        }

        $('body').removeClass('show-bg-image');
        //$(this.el).addClass('create-listing-content');
        var listingTemplate = $("#create-listing-template").text();
        var templateHtml = Mustache.render(listingTemplate, data);
        this.$el.html(templateHtml);
        this.delegateEvents();
      }

  });

  var EditListingView = Backbone.View.extend({
      events: {
        "submit form.create-listing-form": "saveListing",
      },

      el: ".content",
      
      initialize: function(options) {
        _.bindAll(this, "saveListing");
        this.room = options.room;
        this.render();
      },
      
      saveListing: function(e) {

        // Capture form input
        var self = this;

        var title = $('input[name=title]').val();
        var address = $('input[name=address]').val();
        var city = $('input[name=city]').val();
        var state = $('input[name=state]').val();
        var zipCode = $('input[name=zipCode]').val();
        var price = parseInt($('input[name=price]').val());
        var sqft = $('input[name=sqft]').val();
        var description = $('textarea[name=description]').val();

        // amenities
        var washerDryer = $('input[name=washerDryer]').is(':checked');
        var pool = $('input[name=pool]').is(':checked');
        var privateBathroom = $('input[name=privateBathroom]').is(':checked');
        var furnished = $('input[name=furnished]').is(':checked');
        
        // restrictions
        var noSmoking = $('input[name=noSmoking]').is(':checked');
        var noKids = $('input[name=noKids]').is(':checked');
        var noPets = $('input[name=noPets]').is(':checked');

        // Instantiate the object we're going to create in Parse
        var Room = Parse.Object.extend("Room");
        var room = new Room();

        // Save the object instance to Parse
        room.save({
          title: title,
          address: address,
          city: city,
          state: state,
          zipCode: zipCode,
          price: price,
          sqft: sqft,
          description: description,
          privateBathroom: privateBathroom,
          pool: pool,
          washerDryer: washerDryer,
          furnished: furnished,
          noSmoking: noSmoking,
          noKids: noKids,
          noPets: noPets,
          user: Parse.User.current()     
        }).then(function(result) {
          window.location = "host.html";
        }, function(error) {
            self.$(".create-listing-form .error").html(_.escape(error.message)).show();
            self.$(".create-listing-form button").removeAttr("disabled");

        });

        this.$(".create-listing-form button").attr("disabled", "disabled");
        
        return false;
      },


      render: function() {

        var self = this;
        var room = this.room;
        var data = {
          fields: [
            {name: "title",
              description: "Listing Title",
              type: "text",
              value: room.get("title")
            },
            {name: "address",
              description: "Address",
              type: "text",
              value: room.get("address")
            },
            {name: "city",
              description: "City",
              type: "text",
              value: room.get("city")
            },
            {name: "state",
              description: "State",
              type: "text",
              value: room.get("state")
            },
            {name: "zipCode",
              description: "Zipcode",
              type: "text",
              value: room.get("zipCode"),
            },
            {name: "price",
              description: "Price",
              type: "text",
              value: room.get("price")
            },
            {name: "sqft",
              description: "Sqft",
              type: "text",
              value: room.get("sqft")
            },
          ],
          amenities: [
            { description: "Private Bathroom",
              value: "privateBathroom",
              checked: room.get("privateBathroom")
            },
            { description: "Furnished",
              value: "furnished",
              checked: room.get("furnished")
            },
            { description: "Pool",
              value: "pool",
              checked: room.get("pool")
            },
            { description: "Washer & Dryer",
              value: "washerDryer",
              checked: room.get("washerDryer")
            },

          ],
          restrictions: [
            { description: "No smoking",
              value: "noSmoking",
              checked: room.get("noSmoking")
            },
            { description: "No kids",
              value: "noKids",
              checked: room.get("noKids")
            },
            { description: "No pets",
              value: "noPets",
              checked: room.get("noPets")
            }
          ],
          roomDescription: room.get("description"),
          editing: true

        }

        var template = $("#create-listing-template").text();
        var room = {
          "title": room.get("title"),
          "description": room.get("description"),
          "price": room.get("price"),
          "address": room.get("address"),
          "city": room.get("city"),
          "state": room.get("state"),
          "zipCode": room.get("zipCode"),
          "sqft": room.get("sqft")
        };

        var listingTemplate = $("#create-listing-template").text();
        var templateHtml = Mustache.render(listingTemplate, data);
        this.$el.html(templateHtml);
        this.delegateEvents();      
        return false;
      }
  });

  

  var NavBarView = Backbone.View.extend({
    el: "#navbar",

    initialize: function() {
      this.render();
    },

    render: function() {
      var template = $("#navbar-template").text();
      var templateHtml = Mustache.render(template, {
  
      });
      this.$el.html(templateHtml);
    }
  });

  // execution start here
  var user = Parse.User.current();
  var Room = Parse.Object.extend("Room");

  var query = new Parse.Query(Room);
  query.descending("createdAt");
  query.equalTo("user", user);
  query.first({
    success: function(room) {
      if (room){
        new NavBarView();
        new EditListingView({room: room});
      } else {
        new CreateListingView();
      }
    },
    error: function() {
      console.log("Error querying Room object for user");
      console.log(error);
    }
  });

})();