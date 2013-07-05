SpaceFace.Views.PostForm = Backbone.View.extend({

  events: {
    // 'click input[type="submit"]': "submit"
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
        console.log(textStatus);
        console.log(XMLHttpRequest);
        if(textStatus === "success"){
          var post = new SpaceFace.Models.Post(XMLHttpRequest.responseJSON);
          post.set({
            feedable: new SpaceFace.Models.Photo(post.get("feedable"))
          });
          

          SpaceFace.Posts.unshift(post);
        }
        
        
      }
    });
  },

  submit: function(event) {
    event.preventDefault();
    console.log("Submitted a form!!!!");
    console.log($(event.target.form));
    var attrs = $(event.target.form).serializeJSON();
    // form attributes decide which type of object to create
    switch(attrs.item_type) {
      case "StatusUpdate":
        this.model = new SpaceFace.Models.StatusUpdate();
      break;
      case "Photo":
        this.model = new SpaceFace.Models.Photo();
      break;
      default:
      break;
    }

    this.model.save(attrs, {
      success: function(a, response) {
        console.log("Model created successfully!!!");
        console.log (response);
        var post = new SpaceFace.Models.Post();
        post.set(response);
        var statusJSON = post.get("feedable");
        switch(post.get("feedable_type")) {
          case "StatusUpdate":
            post.set({
              feedable: new SpaceFace.Models.StatusUpdate(post.get("feedable"))
            });
          break;
          case "Photo":
            post.set({
              feedable: new SpaceFace.Models.Photo(post.get("feedable"))
            });
          default:
          break;
        }
        SpaceFace.Posts.unshift(post);

      }
    });
    console.log(this.model);
    
  }

});
