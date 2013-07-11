SpaceFace.Views.PostsIndex = Backbone.View.extend({

  template: JST['posts/index'],

  initialize: function() {
    this.listenTo(this.collection, "add", this.render);
    this.listenTo(SpaceFace.CurrentUser, "change", this.updateProfilePic);
  },

  render: function() {
    var that = this;
    that.$el.empty();
    
    that.collection.each(function(post) {
      var feed_item = post.get("feedable");
      that.$el.append(feed_item.render().$el);

    });
    return this;
  },

  updateProfilePic: function() {
    var that = this;
    that.collection.each(function(post) {
      var feed_item = post.get("feedable");
      var userJson = feed_item.get('user')
      if (userJson.id === SpaceFace.CurrentUser.id) {
        userJson.profile_img_url = SpaceFace.CurrentUser.get("profile_img_url");
      }

    });
    this.render();
  }


});
