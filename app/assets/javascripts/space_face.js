window.SpaceFace = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    SpaceFace.CurrentUser = JSON.parse($("#current_user").html());
    new SpaceFace.Routers.Posts({
      "$content": $("#content"),
      "$sidebar": $("#sidebar")
    });
    Backbone.history.start();
  }


};

