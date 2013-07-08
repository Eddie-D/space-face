SpaceFace.Views.FriendRequestsIndex = Backbone.View.extend({

  template: JST['friend_requests/index'],
  emptyTemplate: JST['friend_requests/empty'],

  events: {
    "click button.accept": "accept",
    "click button.decline": "decline"
  },

  initialize: function() {
    this.listenTo(this.collection, "remove", this.render);
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
    var that = this;
    var id = $(event.target).attr("data-id");
    $.ajax({
      url: "/friend_request/accept",
      type: "post",
      data: {
        id: id
      },
      success: function() {
        console.log("friended!!!");
        $(event.target).parent().html("<button class='tiny button disabled'> Accepted</button>")
        var request = that.collection.findWhere({id: parseInt(id)})
        that.collection.remove(request);
      }
    })
  },

  decline: function(event) {
    var that = this;
    var id = $(event.target).attr("data-id");
    $.ajax({
      url: "/friend_request/reject",
      type: "post",
      data: {
        id: id
      },
      success: function() {
        // $(".request-" + id).remove();
        var request = that.collection.findWhere({id: parseInt(id)})
        that.collection.remove(request);
      }
    })
  }


});