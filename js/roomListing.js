Parse.initialize("8FursUpxatbb97bkZXQo0UOhEveyAvcOU2UNs7ZV", "nCv32lT0DhjotclrySOuLi6iAR4LCyrKE3y130Xg");

var CreteListingView = Backbone.View.extend({
  events: {
    "submit form.create-listing-form": "app",
  },

  el: ".content",
  
  initialize: function() {
    _.bindAll(this, "app");
    this.render();
  },

  app: function(e) {
  //
   // Capture form input
      var squareFoot = $('input[name=squareFoot]:checked').val();
      var bathroom = $('input[name=bathroom]:checked').val();
      var smoke = $('input[name=smoke]:checked').val();
      var furniture = $('input[name=furniture]:checked').val();
      var kids = $('input[name=kidss]:checked').val();
      var pets = $('input[name=pets]:checked').val();


      // Instantiate the object we're going to create in Parse
      var CreteListingView = Parse.Object.extend("Room");
      var CreteListingView = new CreteListingView();

      // Save the object instance to Parse
      CreteListingView.save({
        squareFoot: squareFoot,
        bathroom: bathroom,
        smoke: smoke,
        furniture: furniture,
        kids:kids,
        pets: pets,
        user: Parse.User.current()     
      }).then(function(result) {

        // on success, move to the next page (dashboard)
        window.location = "host.html"; 
      }, function(error) {
        // on failure, you should do something? Maybe? Dunno.
        console.log("check your infomation")
      });
    },

    // This renders the view
    render: function() {
      var squareFoot = ["9' x 9'","13' x 13'","15' x 15"];
      var bathroom = ['private', 'share'];
      var smoke = ["yes", "no"];
      var furniture = ["yes", "no"];
      var pets = ["yes", "no"];


      var listingTemplate = $("#create-listing--template").text();
      var templateHtml = Mustache.render(listingTemplate, {
        squareFoot: squareFoot,
        bathroom: bathroom,
        smoke: smoke,
        furniture: furniture,
        kids:kids,
        pets: pets
      });
      this.$el.html(templateHtml);
      this.delegateEvents();
    }

});
    

if (Parse.User.current()) {
  new AppView();
} //else {
  //window.location = "index.html";
//}

var CreteListingView = Backbone.View.extend({
  events: {
    "submit form.create-listing-form": "app",
  },

  el: ".content",
  
  initialize: function() {
    _.bindAll(this, "app");
    this.render();
  },

  app: function(e) {
  //
   // Capture form input
      var squareFoot = $('input[name=squareFoot]:checked').val();
      var bathroom = $('input[name=bathroom]:checked').val();
      var smoke = $('input[name=smoke]:checked').val();
      var furniture = $('input[name=furniture]:checked').val();
      var kids = $('input[name=kidss]:checked').val();
      var pets = $('input[name=pets]:checked').val();


      // Instantiate the object we're going to create in Parse
      var CreteListingView = Parse.Object.extend("Room");
      var CreteListingView = new CreteListingView();

      // Save the object instance to Parse
      CreteListingView.save({
        squareFoot: squareFoot,
        bathroom: bathroom,
        smoke: smoke,
        furniture: furniture,
        kids:kids,
        pets: pets,
        user: Parse.User.current()     
      }).then(function(result) {

        // on success, move to the next page (dashboard)
        window.location = "host.html"; 
      }, function(error) {
        // on failure, you should do something? Maybe? Dunno.
        console.log("check your infomation")
      });
    },

    // This renders the view
    render: function() {
      var squareFoot = ["9' x 9'","13' x 13'","15' x 15"];
      var bathroom = ['private', 'share'];
      var smoke = ["yes", "no"];
      var furniture = ["yes", "no"];
      var pets = ["yes", "no"];


      var listingTemplate = $("#create-listing--template").text();
      var templateHtml = Mustache.render(listingTemplate, {
        squareFoot: squareFoot,
        bathroom: bathroom,
        smoke: smoke,
        furniture: furniture,
        kids:kids,
        pets: pets
      });
      this.$el.html(templateHtml);
      this.delegateEvents();
    }

});
    

if (Parse.User.current()) {
  new AppView();
} //else {
  //window.location = "index.html";
//}

var CreteListingView = Backbone.View.extend({
  events: {
    "submit form.create-listing-form": "app",
  },

  el: ".content",
  
  initialize: function() {
    _.bindAll(this, "app");
    this.render();
  },

  app: function(e) {
  //
   // Capture form input
      var squareFoot = $('input[name=squareFoot]:checked').val();
      var bathroom = $('input[name=bathroom]:checked').val();
      var smoke = $('input[name=smoke]:checked').val();
      var furniture = $('input[name=furniture]:checked').val();
      var kids = $('input[name=kidss]:checked').val();
      var pets = $('input[name=pets]:checked').val();


      // Instantiate the object we're going to create in Parse
      var CreteListingView = Parse.Object.extend("Room");
      var CreteListingView = new CreteListingView();

      // Save the object instance to Parse
      CreteListingView.save({
        squareFoot: squareFoot,
        bathroom: bathroom,
        smoke: smoke,
        furniture: furniture,
        kids:kids,
        pets: pets,
        user: Parse.User.current()     
      }).then(function(result) {

        // on success, move to the next page (dashboard)
        window.location = "host.html"; 
      }, function(error) {
        // on failure, you should do something? Maybe? Dunno.
        console.log("check your infomation")
      });
    },

    // This renders the view
    render: function() {
      var squareFoot = ["9' x 9'","13' x 13'","15' x 15"];
      var bathroom = ['private', 'share'];
      var smoke = ["yes", "no"];
      var furniture = ["yes", "no"];
      var pets = ["yes", "no"];


      var listingTemplate = $("#create-listing--template").text();
      var templateHtml = Mustache.render(listingTemplate, {
        squareFoot: squareFoot,
        bathroom: bathroom,
        smoke: smoke,
        furniture: furniture,
        kids:kids,
        pets: pets
      });
      this.$el.html(templateHtml);
      this.delegateEvents();
    }

});
    

if (Parse.User.current()) {
  new AppView();
} //else {
  //window.location = "index.html";
//}
