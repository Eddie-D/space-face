SpaceFace.Models.Photo = Backbone.RelationalModel.extend({

  url: "/photos",

  parse: function(data) {
    data.likes = new SpaceFace.Collections.Likes(data.likes);
    return data;    
  },
  
  render: function(){
    var view = new SpaceFace.Views.PhotoFeed({
      model: this
    });
    return view.render();
  },

});
