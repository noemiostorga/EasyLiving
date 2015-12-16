Parse.initialize("8FursUpxatbb97bkZXQo0UOhEveyAvcOU2UNs7ZV", "nCv32lT0DhjotclrySOuLi6iAR4LCyrKE3y130Xg");

var AppView = Backbone.View.extend({
  events: {
    "submit form.app-form": "app",
  },

  el: ".content",
  
  initialize: function() {
    _.bindAll(this, "app");
    this.render();
  },

  app: function(e) {
    var self  = this; 
    
    new CreteListingView();
    return false;
    
  },

  render: function() {
    var template = $("#app-template").text();
    this.$el.html(template);
    this.delegateEvents();
  }

});

var CreteListingView = Backbone.View.extend({
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
    var privateBathroom = $('input[name=privateBathroom]').is(':checked');
    var furnished = $('input[name=furnished]').is(':checked');
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
        furnished: furnished,
        noSmoking: noSmoking,
        noKids: noKids,
        noPets: noPets,
        user: Parse.User.current()     
      }).then(function(result) {
        new AppView();
      }, function(error) {
          self.$(".create-listing-form .error").html(_.escape(error.message)).show();
          self.$(".create-listing-form button").removeAttr("disabled");

      });

      this.$(".create-listing-form button").attr("disabled", "disabled");
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


      var listingTemplate = $("#create-listing-template").text();
      var templateHtml = Mustache.render(listingTemplate, data);
      this.$el.html(templateHtml);
      this.delegateEvents();
    }

});
    

if (Parse.User.current()) {
  new AppView();
} //else {
  //window.location = "index.html";
//}
