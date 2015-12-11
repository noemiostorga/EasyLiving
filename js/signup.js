Parse.initialize("8FursUpxatbb97bkZXQo0UOhEveyAvcOU2UNs7ZV", "nCv32lT0DhjotclrySOuLi6iAR4LCyrKE3y130Xg");

$("#signup").submit(function(event){
  event.preventDefault();

  var firstName = $("#signup-firstName").val();
  var lastName = $("#signup-lastName").val();
  var email = $("#signup-email").val();
  var password = $("#signup-password").val();
  var username = $("#signup-username").val();
  
  var user = new Parse.User();
  user.set("firstName", firstName);
  user.set("lastName", lastName);
  user.set("email", username);
  user.set("username", email);
  user.set("password", password);
  
  user.signUp(null,{
    success:function(user){
      console.log(user);

    }, error: function (user, error){
      console.log("signup error:"+error.message);

    }
  });
});
