SpaceFace.Views.PhotoFeed = Backbone.View.extend({

  template: JST['photos/show_in_feed'],

  render: function() {

    var renderedContent = this.template({
      photo: this.model
    });

    this.$el.html(renderedContent);

    return this;
  }

});
