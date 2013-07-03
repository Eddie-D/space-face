SpaceFace.Views.FriendsIndex = Backbone.View.extend({

  template: JST['friends/index'],

  render: function() {
    var renderedContent = this.template({
      friends: this.collection
    });
    this.$el.html(renderedContent);
    return this
  }

});
