var user = Parse.User.current();
var Room = Parse.Object.extend("Room");

var query = new Parse.Query(Room);
query.descending("createdAt");
query.equalTo("user", user);
query.first({
  success: function(room) {
    // Use object with mustache to fill the #host-view-template with the 
    // room data
    /* I think it is a better way to map this model to a view using backbone
      I feel I am repeting myself this works for now
    */
    if (room){
      var template = $("#host-view-template").text();
      var amenities = [
        { description: "Private Bathroom",
          value: room.get("privateBathroom")},
        { description: "Furnished",
          value: room.get("furnished")},
        { description: "Pool",
          value: room.get("pool")},
        { description: "Washer & Dryer",
          value: room.get("washerDryer")}

      ];
      var restrictions = [
        { description: "No smoking",
          value: room.get("noSmoking")
        },
        { description: "No kids",
          value: room.get("noKids")
        },
        { description: "No pets",
          value: room.get("noPets")
        }
      ];

      var room = {
        "title": room.get("title"),
        "description": room.get("description"),
        "price": room.get("price"),
        "address": room.get("address"),
        "city": room.get("city"),
        "state": room.get("state"),
        "zipCode": room.get("zipCode"),
        "sqft": room.get("sqft")
      };

      hostViewHtml = Mustache.render(template, {"room": room,
            "amenities": amenities,
            "restrictions": restrictions});
      self.$el.html(hostViewHtml);
    } else {
      self.undelegateEvents();
      new CreateListingView()
    }
    new NavBarView();
  },

 error: function() {
    console.log("Error querying Room object for user");
    console.log(error);
  }
});

return false;
}