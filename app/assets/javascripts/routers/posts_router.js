SpaceFace.Routers.Posts = Backbone.Router.extend({

  initialize: function(options) {
    this.$content = options.$content;
    this.$sidebar = options.$sidebar; 
    this.$topbar = options.$topbar;
  },

  routes: {
    "": "index",
    "profile": "profile",
    "friends": "friends",
    "users/search?q=:search": "searchUsers"
  },

  topbar: function() {
    var topbarView = new SpaceFace.Views.Topbar();
    this.$topbar.html(topbarView.render().$el);
  },

  index: function() {

    var topbarView = new SpaceFace.Views.Topbar();
    this.$topbar.html(topbarView.render().$el);

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
        console.log("rendering friends....")
        var friendsView = new SpaceFace.Views.FriendsIndex({
          collection: friends
        });
        that.$content.html(friendsView.render().$el);
      },
      error: function() {

      }
    });
  },

  searchUsers: function(search) {
    
    var that = this;
    var users = new SpaceFace.Collections.Users();
    console.log("I am searching now!!!!");
    $.ajax({
      url: "/users/search",
      data: {
        search: search
      },
      success: function(data) {
        var users = new SpaceFace.Collections.Users(data);
        console.log(users);

        var usersView = new SpaceFace.Views.FriendsIndex({
          collection: users
        });
        that.$content.html(usersView.render().$el);
      }
    });
  },

  profile: function() {
    var requestsView = new SpaceFace.Views.FriendRequestsIndex({
      collection: SpaceFace.CurrentUser.get("friendRequests")
    });

    this.$content.html(requestsView.render().$el);
  }

});
