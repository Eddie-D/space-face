SpaceFace.Views.UsersIndex = Backbone.View.extend({

  template: JST['users/index'],

  events: {
    "click button.request": "request"
  },

  render: function() {
    var renderedContent;
    
    if (this.collection.length === 0)  {
      renderedContent = this.emptyTemplate();
    } else {
      renderedContent = this.template({
        users: this.collection
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
        $(event.target).addClass("disabled");
        $(event.target).html("Request sent");
      }
    })
  }

});
