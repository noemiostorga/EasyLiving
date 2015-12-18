(function() {

  Parse.$ = jQuery;

  Parse.initialize("8FursUpxatbb97bkZXQo0UOhEveyAvcOU2UNs7ZV", "nCv32lT0DhjotclrySOuLi6iAR4LCyrKE3y130Xg");



  var CreateListingView = Backbone.View.extend({
    events: {
      "submit form.create-listing-form": "createListing",
    },

    el: ".content",
    
    initialize: function() {
      _.bindAll(this, "createListing");
      this.render();
    },

    createListing: function(e) {

      // Capture form input
      var self = this;

      var title = $('input[name=title]').val();
      var address = $('input[name=address]').val();
      var city = $('input[name=city]').val();
      var state = $('input[name=state]').val();
      var zipCode = $('input[name=zipCode]').val();
      var price = parseInt($('input[name=price]').val());
      var sqft = $('input[name=sqft]').val();
      var description = $('textarea[name=description]').val();
      var privateBathroom = $('input[name=privateBathroom]').is(':checked');
      var furnished = $('input[name=furnished]').is(':checked');
      var noSmoking = $('input[name=noSmoking]').is(':checked');
      var noKids = $('input[name=noKids]').is(':checked');
      var noPets = $('input[name=noPets]').is(':checked');

        // Instantiate the object we're going to create in Parse
      var Room = Parse.Object.extend("Room");
      var room = new Room();

        // Save the object instance to Parse
        room.save({
          title: title,
          address: address,
          city: city,
          state: state,
          zipCode: zipCode,
          price: price,
          sqft: sqft,
          description: description,
          privateBathroom: privateBathroom,
          furnished: furnished,
          noSmoking: noSmoking,
          noKids: noKids,
          noPets: noPets,
          user: Parse.User.current()     
        }).then(function(result) {
          new AppView();
        }, function(error) {
            self.$(".create-listing-form .error").html(_.escape(error.message)).show();
            self.$(".create-listing-form button").removeAttr("disabled");

        });

        this.$(".create-listing-form button").attr("disabled", "disabled");
      },

      // This renders the view
      render: function() {
        var data = {
          fields: [
            {name: "title",
              description: "Listing Title",
              type: "text"},
            {name: "address",
              description: "Address",
              type: "text"},
            {name: "city",
              description: "City",
              type: "text"},
            {name: "state",
              description: "State",
              type: "text"},
            {name: "zipCode",
              description: "Zipcode",
              type: "text"},
            {name: "price",
              description: "Price",
              type: "text"},
            {name: "sqft",
              description: "Sqft",
              type: "text"},
          ],
          amenities: [
            { description: "Private Bathroom",
              value: "privateBathroom"},
            { description: "Furnished",
              value: "furnished"},
            { description: "Pool",
              value: "pool"},
            { description: "Washer & Dryier",
              value: "Washer & Dryier"},

          ],
          restrictions: [
            { description: "No smoking",
              value: "noSmoking"
            },
            { description: "No kids",
              value: "noKids"
            },
            { description: "No pets",
              value: "noPets"
            }
          ]

        }


        var listingTemplate = $("#create-listing-template").text();
        var templateHtml = Mustache.render(listingTemplate, data);
        this.$el.html(templateHtml);
        this.delegateEvents();
      }

  });


  var ManageHostView = Backbone.View.extend({
      events: {
        "submit form.host-form": "createListing",
      },

      el: ".content",
      
      initialize: function() {
        _.bindAll(this, "createListing");
        this.render();
      },
      
      createListing: function(e) {
        new CreateListingView();
        this.undelegateEvents();
        return false;
      },

      render: function() {
        var self = this;

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
                  value: room.get("furnished")}
                /*{ description: "Pool",
                  value: room.get("pool")},
                { description: "Washer & Dryier",
                  value: "Washer & Dryier"},*/

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
            } else {
              var template = $("#host-view-template-no-listing").text();
              hostViewHtml = template;
            }

            self.$el.html(hostViewHtml);
            self.delegateEvents();
          },

         error: function() {
            console.log("Error querying Room object for user");
            console.log(error);
          }
        })

        this.delegateEvents();
        return false;
      }
  });

  var LogInView = Backbone.View.extend({
    events: {
      "submit form.login-form": "logIn",
      "click a.signup": "signUp"
    },

    el: ".content",
    
    initialize: function() {
      _.bindAll(this, "logIn");
      this.render();
    },

    signUp: function() {
      new SignUpView();
      this.undelegateEvents();
      return false;
    },

    logIn: function(e) {
      var self = this;
      var username = $("#login-username").val();
      var password = $("#login-password").val();
      
      Parse.User.logIn(username, password, {
        success: function(user) {
          window.location = "host.html";
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

  var SignUpView = Backbone.View.extend({
      events: {
        "submit form.signup-form": "signUp",
        "click a.login": "logIn"
      },

      el: ".content",
      
      initialize: function() {
        _.bindAll(this, "signUp");
        this.render();
      },

      logIn: function() {
        new LogInView();
        this.undelegateEvents();
        return false;
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
        var self = this;
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
          new AppView();
          self.undelegateEvents();
        }, function(error) {
          // on failure, you should do something? Maybe? Dunno.
          console.log("check your infomation")
        });
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

  var AppView = Backbone.View.extend({
    el: "#mainapp",
    
    initialize: function() {
      this.render();
    },

    render: function() {
      if (Parse.User.current()) {
        new ManageHostView();
      } else {
        window.location = "mainPage.html";
      }
    }

  });

 new AppView() 

})();