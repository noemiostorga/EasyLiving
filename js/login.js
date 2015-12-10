Parse.initialize("8FursUpxatbb97bkZXQo0UOhEveyAvcOU2UNs7ZV", "nCv32lT0DhjotclrySOuLi6iAR4LCyrKE3y130Xg");

$("#login").submit(function(event){
  event.preventDefault();

  var email = $("#login-email").val();
  var password = $("#login-password").val();

  Parse.User.logIn(email, password,{
    success:function(user){
        console.log("log in success");

      }, error: function (user, error){
        console.log("login error:"+error.message);
      }
    });
});

