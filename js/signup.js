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
  events: {
      "submit form.userprofile-form": "createUserProfile",
    },

    el: ".content",
    
    initialize: function() {
      //_.bindAll(this, "logIn", "signUp");
      _.bindAll(this, "createUserProfile");
      this.render();
    },
    createUserProfile: function(){
      
      var gender = $('input[name=gender]:checked').val();
      var orientation = $('input[name=orientation]:checked').val();
      var occupation = $('input[name=occupation]:checked').val();
      var ageGroup = $('input[name=agegroup]:checked').val();

      var UserProfile = Parse.Object.extend("UserProfile");
      var userProfile = new UserProfile();
      userProfile.save({
        gender: gender,
        orientation: orientation,
        occupation: occupation,
        ageGroup: ageGroup,
        user: Parse.User.current()     
      }).then(function(result) {
        console.log(result);
      }, function(error) {
        console.log("You are horrible")
      });
    },

    render: function() {
      var userTemplate = $("#userProfile-template").text();
      this.$el.html(userTemplate);
      this.delegateEvents();
    }

});

if (Parse.User.current()) {
  console.log("Already logged in!");
} else {
  new SignUpView();
  //new CreateUserProfileView();
}