SpaceFace.Views.PostForm = Backbone.View.extend({

  events: {
    'click input[type="submit"]': "submit"
  },

  template: JST['posts/post_form'],

  render: function() {
    var formContent = this.template();
    this.$el.html(formContent);
    return this;
  },

  submit: function(event) {
    event.preventDefault();
    console.log("Submitted a form!!!!");

    var attrs = $(event.target.form).serializeJSON();

    // form attributes decide which type of object to create
    switch(attrs.item_type) {
      case "StatusUpdate":
      this.model = new SpaceFace.Models.StatusUpdate();
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
        switch(post.get("feedable_type")) {
          case "StatusUpdate":
            var statusJSON = post.get("feedable");
            // post.get("feedable") = (new SpaceFace.Models.StatusUpdate(post.get("feedable")));
            post.set({
              feedable: new SpaceFace.Models.StatusUpdate(post.get("feedable"))
            })
          break;
          default:
          break;
        }
        SpaceFace.Posts.unshift(post);

      }
    });
    console.log(this.model);
    
  }

});
