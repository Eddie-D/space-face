SpaceFace.Views.StatusUpdateFeed = Backbone.View.extend({

  template: JST['status_updates/show_in_feed'],

  render: function() {

    var renderedContent = this.template({
      status: this.model
    });

    this.$el.html(renderedContent);

    return this;
  }

});
