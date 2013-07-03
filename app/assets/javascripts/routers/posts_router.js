SpaceFace.Routers.Posts = Backbone.Router.extend({

  initialize: function(options) {
    this.$content = options.$content;
    this.$sidebar = options.$sidebar; 
  },

  routes: {
    "": "index"
  },

  index: function() {
    var that = this;
    console.log("Fetching posts...")
    SpaceFace.Posts = new SpaceFace.Collections.Posts();
    SpaceFace.Posts.fetch({
      success: function(a, b, c) {
        console.log(b);
        var indexView = new SpaceFace.Views.PostsIndex({
          collection: SpaceFace.Posts
        });

        that.$content.html(indexView.render().$el);
      }
    })
  }

});
