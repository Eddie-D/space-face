SpaceFace.Collections.Posts = Backbone.Collection.extend({

  model: SpaceFace.Models.Post,
  
  initialize: function(options) {
    this.user_id = options.user_id;
  },

  url: function(){
    var url;
    if (this.user_id) {
      url = "/users/" + this.user_id + "/feed_items";
    } else {
      url = "/feed_items"
    }

    return url;
  }

  // url: "/feed_items"

});