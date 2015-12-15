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
    
    
  },

  render: function() {
    var template = $("#app-template").text();
    this.$el.html(template);
    this.delegateEvents();
  }

});

var CreteListingView = Backbone.View.extend({
  events: {
    "submit form.create-listing-view-form": "app",
  },

  el: ".content",
  
  initialize: function() {
    _.bindAll(this, "app");
    this.render();
  },

  app: function(e) {
    
    
  },

  render: function() {
    var template = $("#app-template").text();
    this.$el.html(template);
    this.delegateEvents();
  }

});

if (Parse.User.current()) {
  new AppView();
} else {
  window.location = "index.html";
}
