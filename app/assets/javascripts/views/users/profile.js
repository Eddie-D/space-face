SpaceFace.Views.Profile = Backbone.View.extend({

  editableTemplate: JST['users/editable_profile'],
  changePicTemplate: JST['photos/photo_select'],

  initialize: function() {
    this.listenTo(SpaceFace.CurrentUser, "change", this.render)
  },

  events: {
    "click button.change-picture": "displayPictures",
    "click img.thumbnail": "changeProfilePicture"
  },

  render: function() {
    var content;
    if (this.model.isCurrentUser()) {
      content = this.editableTemplate({
        user: this.model
      });
    }

    this.$el.html(content);
    return this;
  },

  displayPictures: function(event) {
    event.preventDefault();
    content = this.changePicTemplate({
      photos: SpaceFace.CurrentUser.get("photos")
    })
    this.$el.append(content);
  },

  changeProfilePicture: function(event) {
    var src = $(event.target).attr("src");
    SpaceFace.CurrentUser.save({
      profile_img_url: src
    })
  }

});