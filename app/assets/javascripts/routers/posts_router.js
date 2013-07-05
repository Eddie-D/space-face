SpaceFace.Routers.Posts = Backbone.Router.extend({

  initialize: function(options) {
    this.$content = options.$content;
    this.$sidebar = options.$sidebar; 
  },

  routes: {
    "": "index",
    "friends": "friends"
  },

  index: function() {
    var that = this;

    that.$content.empty();
    var formView = new SpaceFace.Views.PostForm();
    that.$content.append(formView.render().$el);

    SpaceFace.Posts = new SpaceFace.Collections.Posts();
    SpaceFace.Posts.fetch({
      success: function() {
        var indexView = new SpaceFace.Views.PostsIndex({
          collection: SpaceFace.Posts
        });

        that.$content.append(indexView.render().$el);
      }
    });
  },

  friends: function() {
    var that = this;
    var friends = new SpaceFace.Collections.Friends({
      userId: SpaceFace.CurrentUser.id
    });
    friends.fetch({
      success: function() {
        var friendsView = new SpaceFace.Views.FriendsIndex({
          collection: friends
        });
        that.$content.html(friendsView.render().$el);
      }
    });
  }

});
