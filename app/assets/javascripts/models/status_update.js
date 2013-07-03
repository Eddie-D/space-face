SpaceFace.Models.StatusUpdate = Backbone.Model.extend({
  url: "/status_updates",
  
  render: function(){
    
    var view = new SpaceFace.Views.StatusUpdateFeed({
      model: this
    });
    return view.render();
  }
});
