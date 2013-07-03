SpaceFace.Views.PostsIndex = Backbone.View.extend({

  template: JST['posts/index'],

  render: function() {
    var that = this;
    that.collection.each(function(post) {
      var feed_item = post.get("feedable");

      that.$el.append(feed_item.render().$el);

    });
    return this;
  }


});
