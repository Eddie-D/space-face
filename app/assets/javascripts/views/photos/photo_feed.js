SpaceFace.Views.PhotoFeed = Backbone.View.extend({

  template: JST['photos/show_in_feed'],

  events: {
    "click button.like": "like"
  },

  render: function() {

    var renderedContent = this.template({
      photo: this.model
    });

    this.$el.html(renderedContent);

    return this;
  },

  like: function(event) {

    var id = $(event.target).attr("data-id");
    $.ajax({
      url: "/like",
      type: "post",
      data: {
        like: {
          likeable_id: id,
          likeable_type: "Photo"  
        }
        
      },
      success: function(response) {
        console.log("Successful like!!!!");
        console.log(response);
      }
    })

  }

});
