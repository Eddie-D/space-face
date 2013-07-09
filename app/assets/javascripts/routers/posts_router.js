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
    "users/search?q=:search": "searchUsers",
    "friend_requests": "friendRequests",
    "users/:user_id/photos": "photos" 
  },

  topbar: function() {
    var topbarView = new SpaceFace.Views.Topbar();
    this.$topbar.html(topbarView.render().$el);
  },

  index: function() {
    var that = this;

    that.$content.empty();
    var formView = new SpaceFace.Views.PostForm();
    that.$content.append(formView.render().$el);

    SpaceFace.Posts = new SpaceFace.Collections.Posts();
    SpaceFace.Posts.fetch({
      success: function(a, resp) {
        var indexView = new SpaceFace.Views.PostsIndex({
          collection: SpaceFace.Posts
        });

        that.$content.append(indexView.render().$el);
      }
    });
  },

  friends: function() {
    var that = this;
    
    $.ajax({
      url: "/users/" + SpaceFace.CurrentUser.id + "/friends",
      success: function(data) {
        console.log("Got friends!!")
        console.log(data)
        var friends = new SpaceFace.Collections.Users(data);
        var friendsView = new SpaceFace.Views.FriendsIndex({
          collection: friends
        });
        that.$content.html(friendsView.render().$el);
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

        var usersView = new SpaceFace.Views.UsersIndex({
          collection: users
        });
        that.$content.html(usersView.render().$el);
      }
    });
  },

  friendRequests: function() {
    var requestsView = new SpaceFace.Views.FriendRequestsIndex({
      collection: SpaceFace.CurrentUser.get("friendRequests")
    });

    this.$content.html(requestsView.render().$el);
  },

  photos: function(user_id) {
    var that = this;
    var url = "/users/" + user_id + "/photos";
    $.ajax({
      url: url,
      success: function(data) {
        var photos = new SpaceFace.Collections.Photos(data);
        var photoView = new SpaceFace.Views.PhotosIndex({
          collection: photos
        });
        that.$content.html(photoView.render().$el);
      }
    });
  },

  profile: function() {
    var that = this;
    that.$content.empty();
    var profileView = new SpaceFace.Views.Profile({
      model:SpaceFace.CurrentUser
    });
    that.$content.append(profileView.render().$el);

    var posts = new SpaceFace.Collections.Posts({
      user_id: SpaceFace.CurrentUser.id
    });
    posts.fetch({
      success: function(obj, resp){

        var postsView = new SpaceFace.Views.PostsIndex({
          collection: obj
        });
        that.$content.append(postsView.render().$el);
      }
    })

  }

});
