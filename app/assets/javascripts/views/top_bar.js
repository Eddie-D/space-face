SpaceFace.Views.Topbar = Backbone.View.extend({

  template: JST['top_bar/top_bar'],

  events: {
    "click input[type='submit']": "search"
  },

  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);

    return this;
  },

  search: function(event) {
    event.preventDefault();
    
    var searchTerm = $(event.target.form).serializeJSON().q;
    var url = "users/search?q=" + searchTerm;
    Backbone.history.navigate(url, {trigger: true});

  }

});
