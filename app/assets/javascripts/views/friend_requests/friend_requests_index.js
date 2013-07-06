SpaceFace.Views.FriendRequestsIndex = Backbone.View.extend({

  template: JST['friend_requests/index'],
  emptyTemplate: JST['friend_requests/empty'],

  events: {
    "click button.accept": "accept",
    "click button.decline": "decline"
  },

  render: function() {
    var renderedContent;
    if (this.collection.length === 0) {
      renderedContent = this.emptyTemplate();
    } else {
      renderedContent = this.template({
      requests: this.collection
    });
    }

    
    
    this.$el.html(renderedContent); 

    return this;
  },

  accept: function(event) {
    console.log(event);
    var id = $(event.target).attr("data-id");
    $.ajax({
      url: "/friend_request/accept",
      type: "post",
      data: {
        id: id
      },
      success: function() {
        console.log("friended!!!");
      }
    })
  },

  decline: function() {

  }


});