SpaceFace.Views.PostsIndex = Backbone.View.extend({

  template: JST['posts/index'],

  render: function() {
    var that = this;
    that.collection.each(function(post) {
      var feed_item = post.get("feedable");
      console.log(feed_item);
      
      console.log(feed_item.render());

      that.$el.append(feed_item.render().$el);

    });
    // this.$el.html();
    return this;
  }


});
