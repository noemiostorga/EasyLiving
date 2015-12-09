



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

