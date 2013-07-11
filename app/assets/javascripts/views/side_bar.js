SpaceFace.Views.Sidebar = Backbone.View.extend({

  template: JST['side_bar/side_bar'],

  initialize: function() {
    this.listenTo(SpaceFace.CurrentUser, "change", this.render)
  },

  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }

});