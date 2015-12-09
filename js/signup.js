/*$("#signup").submit(function(event){
  event.preventDefault();

  var email = $("#signup-email").val();
  var password = $("#signup-password").val();

  var user = new Parse.User();
  user.set("username", email);
  user.set("firtName", firtName);
  user.set("lastName", lastName)
  user.set("email", email);
  user.set("password", password);
  user.set("accountType", accountType);

  user.signUp(null,{
    success:function(user){
      console.log(user);

    }, error: function (user, error){
      console.log("signUp error:"+error.message)

    }
  });
});*/

