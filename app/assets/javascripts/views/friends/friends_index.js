SpaceFace.Views.FriendsIndex = Backbone.View.extend({

  template: JST['friends/index'],
  emptyTemplate: JST['friends/empty'],

  events: {
    "click button.request": "request"
  },

  render: function() {
    var renderedContent;
    
    if (this.collection.length === 0)  {
      renderedContent = this.emptyTemplate();
    } else {
      renderedContent = this.template({
        friends: this.collection
      });
    }
    this.$el.html(renderedContent);
    return this
  },

  request: function(event) {
    var that = this;

    var user_id = $(event.target).attr("data-id");
    $.ajax({
      url: "/friend_request",
      type: "post",
      data: {
        friend_id: user_id
      },
      success: function(response) {
        console.log("success");
      }
    })
  }

});
