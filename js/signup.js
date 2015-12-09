
$("#signUp").submit(function(event){
  event.preventDefault();

  var email =("#email").val();
  var pass = ("#password").val();

  var user = newParse.User();
  user.set("signup-email", email);
  user.set("signup-password", pass);

  user.signUp(null,{
    success:function(user){

    }, error: function (user, error){
      console.log("signUp error:"+error.message)

    }
  });
});





  /*var user = Backbone.Model.extend({
    initialize: function() {
    },
    defaults: {
    username: null,
    password: null,
    email: null,
    firstName: null,
    lastName: null,
    accountType: null
  },
  validate: function (attrs) {
    if (!attrs.username) {
      return "username is required";
    }
    if (!attrs.password) {
      return "password is required";
    }
    if (!attrs.email) {
      return "email is required";
    }
    if (!attrs.firstName) {
      return "firstName is required";
    }
    if (!attrs.lastName) {
      return "lastName is required";
    }
    if (!attrs.accountType) {
      return "accountType is required";
    }

    if (typeof attrs.username !== 'string') {
      return "username must a string";
    }
    if (typeof attrs.password !== 'string') {
      return "password must a string";
    }
    if (typeof attrs.email !== 'string') {
      return "email must a string";
    }
    if (typeof attrs.firstName !== 'string') {
      return "firstName must a string";
    }
    if (typeof attrs.lastName !== 'string') {
      return "lastName must a string";
    }
    if (typeof attrs.accountType !== 'string') {
      return "accountType must a string";
    }
  },
  _parse_class_name: "User",
  idAttribute: "objectId"
});

var Router = Backbone.Router.extend({
    initialize: function() {
      Backbone.history.start({pushState: true});
    },
    routes: {
      "username": "username",
      "add": "add",
    }
  });

function myFunction() {

    Parse.initialize("ID", "PASS");

    var username = $("#signup-username").val(),
        password = $("#signup-password").val();

    Parse.User.signUp(username, password, {}, {
        success: function (user) {
            alert("Yay!");
        },
        error: function (user, error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });
}

var user = new Parse.User();
user.set("username", "my email");
user.set("password", "my pass");
user.set("email", "email@example.com");
user.set("firstName", "my firstName");
user.set("lastName", "my lastName");
user.set("accountType", "accountType");*/
