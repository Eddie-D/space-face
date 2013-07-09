SpaceFace.Views.Profile = Backbone.View.extend({

  editableTemplate: JST['users/editable_profile'],

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

});