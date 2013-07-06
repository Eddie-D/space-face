SpaceFace.Views.FriendsIndex = Backbone.View.extend({

  template: JST['friends/index'],
  emptyTemplate: JST['friends/empty'],

  render: function() {
    var renderedContent;
    if (this.collection.length === 0)  {
      renderedContent = this.emptyTemplate();
    } else {
      renderedContent = this.template({
        friends: this.collection
      });
    }
    this.$el.html(renderedContent);
    return this
  }

});
