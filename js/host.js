Parse.initialize("8FursUpxatbb97bkZXQo0UOhEveyAvcOU2UNs7ZV", "nCv32lT0DhjotclrySOuLi6iAR4LCyrKE3y130Xg");

var user = Parse.User.current();
var Room = Parse.Object.extend("Room");

var query = new Parse.Query(Room);
query.descending("createdAt");
query.equalTo("user", user);
query.first({
  success: function(room) {
    if (room) {
        $('.room-description').html(room.get("description"));
    } else {
        window.location = "listing.html";
    }
  },

 error: function() {
    console.log("Error querying Room object for user");
    console.log(error);
  }
});