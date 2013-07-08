SpaceFace.Views.PostForm = Backbone.View.extend({

  events: {
    "click input.post-status": "submit",
    "click input.post-photo": "postPhoto"

  },

  template: JST['posts/post_form'],

  render: function() {
    var formContent = this.template();
    this.$el.html(formContent);
    return this;
  },

  postPhoto: function(event) {
    event.preventDefault();
    $(event.target.form).ajaxSubmit({
      beforeSubmit: function(a,f,o) {
        o.dataType = "json";
      },
      complete: function(XMLHttpRequest, textStatus) {
        if(textStatus === "success"){
          var post = new SpaceFace.Models.Post(XMLHttpRequest.responseJSON);
          post.set({
            feedable: new SpaceFace.Models.Photo(post.get("feedable"))
          });
          post.get("feedable").set({
            likes: new SpaceFace.Collections.Likes()
          });
          SpaceFace.Posts.unshift(post);
        }
        
        
      }
    });
    $(".photo-description").val("");
  },

  submit: function(event) {
    event.preventDefault();

    var attrs = $(event.target.form).serializeJSON();
    $(".status-update").val("");
    
    $.ajax({
      url: "/status_updates",
      type: "post",
      data:{
        status_update: attrs
      },
      success: function(response) {
        
        var post = new SpaceFace.Models.Post(response)
        post.set({
          feedable: new SpaceFace.Models.StatusUpdate(post.get("feedable"))
        });
        post.get("feedable").set({
          likes: new SpaceFace.Collections.Likes()
        });
        console.log(post);
        SpaceFace.Posts.unshift(post);
      }
    })

  }

});
