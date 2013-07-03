window.SpaceFace = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new SpaceFace.Routers.Posts({
      "$content": $("#content"),
      "$sidebar": $("#sidebar")
    });
    Backbone.history.start();
  }


};

