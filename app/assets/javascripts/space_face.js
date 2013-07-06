window.SpaceFace = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    var currentUserJson = JSON.parse($("#current_user").html());
    SpaceFace.CurrentUser = new SpaceFace.Models.User(currentUserJson); 
    router = new SpaceFace.Routers.Posts({
      "$content": $("#content"),
      "$sidebar": $("#sidebar"),
      "$topbar": $("#topbar")
    });
    router.topbar();

    Backbone.history.start();
  }


};

