SpaceFace.Views.StatusUpdateFeed = Backbone.View.extend({

  template: JST['status_updates/show_in_feed'],

   events: {
    "click button.like": "like",
    "click button.unlike": "unlike"
  },

  initialize: function() {
    var that = this;
    that.listenTo(that.model, "change", that.render);
  },

  render: function() {
    console.log(this.model);
    var renderedContent = this.template({
      status: this.model
    });

    this.$el.html(renderedContent);

    return this;
  },

  like: function(event) {
    var that = this;
    var id = $(event.target).attr("data-id");
    $.ajax({
      url: "/like",
      type: "post",
      data: {
        like: {
          likeable_id: id,
          likeable_type: "StatusUpdate"  
        }
      },
      success: function(response) {
        var like = new SpaceFace.Models.Like(response);
        that.model.get("likes").add(like);
        that.model.set({
          is_liked: true
        });
      }
    });
  },

  unlike: function(event) {
    var that = this;
    var id = $(event.target).attr("data-id");
    $.ajax({
      url: "/like",
      type: "delete",
      data: {
        like: {
          likeable_id: id,
          likeable_type: "StatusUpdate"
        }
      },
      success: function(response) {
        var like = that.model.get("likes").findWhere({
          likeable_id: parseInt(id),
          likeable_type: "StatusUpdate",
          user_id: SpaceFace.CurrentUser.id
        })
        that.model.get("likes").remove(like);
        that.model.set({
          is_liked: false
        });
      }
    })
  }

});
