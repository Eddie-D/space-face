SpaceFace.Models.StatusUpdate = Backbone.Model.extend({
  url: "/status_updates",

  parse: function(data) {
    data.likes = new SpaceFace.Collections.Likes(data.likes);
    data.comments = new SpaceFace.Collections.Comments(data.comments);
    return data;    
  },

  render: function(){
    
    var view = new SpaceFace.Views.StatusUpdateFeed({
      model: this
    });
    return view.render();
  }
});
