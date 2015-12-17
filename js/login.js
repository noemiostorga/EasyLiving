Parse.initialize("8FursUpxatbb97bkZXQo0UOhEveyAvcOU2UNs7ZV", "nCv32lT0DhjotclrySOuLi6iAR4LCyrKE3y130Xg");

var LogInView = Backbone.View.extend({
  events: {
    "submit form.login-form": "logIn",
  },

  el: ".content",
  
  initialize: function() {
    _.bindAll(this, "logIn");
    this.render();
  },

  logIn: function(e) {
    var self = this;
    var username = $("#login-username").val();
    var password = $("#login-password").val();
    
    Parse.User.logIn(username, password, {
      success: function(user) {
        window.location = "dashboard.html";
        self.undelegateEvents();
      },

      error: function(user, error) {
        self.$(".login-form .error").html("Invalid username or password. Please try again.").show();
        self.$(".login-form button").removeAttr("disabled");
      }
    });

    this.$(".login-form button").attr("disabled", "disabled");

    return false;
  },

  render: function() {
    var signupTemplate = $("#login-template").text();
    this.$el.html(signupTemplate);
    this.delegateEvents();
  }

});



if (!Parse.User.current()) {
  new LogInView();
} else {
  //window.location = "dashboard.html";
  Parse.User.logOut();
  new LogInView();
}
