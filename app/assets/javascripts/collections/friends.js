SpaceFace.Collections.Friends = Backbone.Collection.extend({

  model: SpaceFace.Models.Friend,

  initialize: function(options) {
    this.url = "/users/" + options.userId + "/friends"
  }

});
