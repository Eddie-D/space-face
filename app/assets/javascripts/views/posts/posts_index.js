SpaceFace.Views.PostsIndex = Backbone.View.extend({

  template: JST['posts/index'],

  initialize: function() {
    var that = this;
    this.listenTo(SpaceFace.Posts, "add", that.render);

  },

  render: function() {
    var that = this;
    that.$el.empty();
    that.collection.each(function(post) {
      var feed_item = post.get("feedable");

      that.$el.append(feed_item.render().$el);

    });
    return this;
  }


});
