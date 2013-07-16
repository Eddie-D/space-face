SpaceFace.Views.PhotoFeed = Backbone.View.extend({

  template: JST['photos/show_in_feed'],

  events: {
    "click button.like": "like",
    "click button.unlike": "unlike",
    "click input.comment": "comment"
  },

  initialize: function() {
    var that = this;
    that.listenTo(that.model, "change", that.render);
    that.listenTo(that.model.get("comments"), "add", that.render);
  },

  render: function() {
    var renderedContent = this.template({
      photo: this.model
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
          likeable_type: "Photo"  
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
          likeable_type: "Photo"
        }
      },
      success: function(response) {
        var like = that.model.get("likes").findWhere({
          likeable_id: parseInt(id),
          likeable_type: "Photo",
          user_id: SpaceFace.CurrentUser.id
        })
        that.model.get("likes").remove(like);
        that.model.set({
          is_liked: false
        });
      }
    })
  },

  comment: function(event) {
    var that = this;
    event.preventDefault();
    var attrs = $(event.target.form).serializeJSON();
    $.ajax({
      url: "/comment",
      type: "post",
      data:{
        comment: {
          body: attrs.body,
          commentable_id: parseInt(attrs.commentable_id),
          commentable_type: "Photo"
        }
      },
      success: function(data) {
        var comment = new SpaceFace.Models.Comment(data, {parse: true});
        that.model.get("comments").add(comment);
      }
    })
  },

});
