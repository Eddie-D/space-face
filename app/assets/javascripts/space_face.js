window.SpaceFace = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    SpaceFace.CurrentUser = JSON.parse($("#current_user").html());
    router = new SpaceFace.Routers.Posts({
      "$content": $("#content"),
      "$sidebar": $("#sidebar"),
      "$topbar": $("#topbar")
    });

    Backbone.history.start();
  }


};

