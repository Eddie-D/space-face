SpaceFace.Models.Photo = Backbone.Model.extend({

  // url: "/photos",

  parse: function(data) {
    data.likes = new SpaceFace.Collections.Likes(data.likes);
    data.comments = new SpaceFace.Collections.Comments(data.comments);
    return data;    
  },
  
  render: function(){
    var view = new SpaceFace.Views.PhotoFeed({
      model: this
    });
    return view.render();
  },

});
