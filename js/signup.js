Parse.$ = jQuery;
Parse.initialize("8FursUpxatbb97bkZXQo0UOhEveyAvcOU2UNs7ZV", "nCv32lT0DhjotclrySOuLi6iAR4LCyrKE3y130Xg");


var SignUpView = Backbone.View.extend({
    events: {
      "submit form.signup-form": "signUp"
    },

    el: ".content",
    
    initialize: function() {
      _.bindAll(this, "signUp");
      this.render();
    },

    signUp: function(e) {
      var self = this;

      var firstName = $("#signup-firstName").val();
      var lastName = $("#signup-lastName").val();
      
      var email = $("#signup-email").val();
      var username = email;

      var password = $("#signup-password").val();
      var confirm = $("#signup-confirm").val();

      var accountType = $('input[name=account-type]:checked').val()

      if (password !== confirm) {
        $('#password-error').text("passwords do not match");
        return;
      } else {
        $('#password-error').text("");
      }
      
      Parse.User.signUp(username, password, {
          "firstName": firstName,
          "lastName": lastName,
          "email": email,
          "accountType": accountType
      }, {
        success: function(user) {
          new CreateUserProfileView();
          self.undelegateEvents();
        },

        error: function(user, error) {
          self.$(".signup-form .error").html(_.escape(error.message)).show();
          self.$(".signup-form button").removeAttr("disabled");
        }
      });

      this.$(".signup-form button").attr("disabled", "disabled");

      return false;
    },

    render: function() {
      var signupTemplate = $("#signup-template").text();
      this.$el.html(signupTemplate);
      this.delegateEvents();
    }
  });


var CreateUserProfileView = Backbone.View.extend({

  // This declares the events we're binding functions to
  events: {
      "submit form.userprofile-form": "createUserProfile",
    },

    // This is the html element where you "render" your html to
    el: ".content",
    
    // This is the constructor/initilizer
    // bind your event->function calls
    // and call this.render()
    initialize: function() {
      _.bindAll(this, "createUserProfile");
      this.render();
    },

    // This bound to our button click on our template form
    createUserProfile: function(){
      // Capture form input
      var gender = $('input[name=gender]:checked').val();
      var orientation = $('input[name=orientation]:checked').val();
      var occupation = $('input[name=occupation]:checked').val();
      var ageGroup = $('input[name=agegroup]:checked').val();

      // Instantiate the object we're going to create in Parse
      var UserProfile = Parse.Object.extend("UserProfile");
      var userProfile = new UserProfile();

      // Save the object instance to Parse
      userProfile.save({
        gender: gender,
        orientation: orientation,
        occupation: occupation,
        ageGroup: ageGroup,
        user: Parse.User.current()     
      }).then(function(result) {

        // on success, move to the next page (dashboard)
        window.location = "index.html"; 
      }, function(error) {
        // on failure, you should do something? Maybe? Dunno.
        console.log("check your infomation")
      });

      return false;
    }, 

    // This renders the view
    render: function() {
      var orientation = ['straight', 'gay', 'bisexual'];
      var gender = ['male', 'female'];
      var occupation = ["professional", "student", "other"];
      var ageGroup = ["18-30", "30-40", "40-50", "50-60", "60+"];

      var userTemplate = $("#userProfile-template").text();
      var templateHtml = Mustache.render(userTemplate, {
        gender: gender,
        orientation: orientation,
        occupation: occupation,
        ageGroup: ageGroup
      });
      this.$el.html(templateHtml);
      this.delegateEvents();
    }

});

if (!Parse.User.current()) {
  new SignUpView();
} else {
  Parse.User.logOut();
  new SignUpView();
  
}





