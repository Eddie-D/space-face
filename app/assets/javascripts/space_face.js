window.SpaceFace = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    var currentUserJson = JSON.parse($("#current_user").html());
    SpaceFace.CurrentUser = new SpaceFace.Models.User(currentUserJson); 
    router = new SpaceFace.Routers.Router({
      "$content": $("#content"),
      "$sidebar": $("#sidebar"),
      "$topbar": $("#topbar"),
      "$sidebar": $("#sidebar")
    });
    router.topbar();
    router.sidebar();

    Backbone.history.start();
  }


};

