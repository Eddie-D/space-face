SpaceFace.Models.StatusUpdate = Backbone.Model.extend({

  render: function(){

    var view = new SpaceFace.Views.StatusUpdateFeed({
      model: this
    });
    return view.render();
  }
});
