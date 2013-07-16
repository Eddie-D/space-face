SpaceFace.Models.Photo = Backbone.Model.extend({

  parse: function(data) {
    console.log(data);
    data.likes = new SpaceFace.Collections.Likes(data.likes);
    data.comments = new SpaceFace.Collections.Comments(data.comments, {parse: true});
    return data;    
  },
  
  render: function(){
    var view = new SpaceFace.Views.PhotoFeed({
      model: this
    });
    return view.render();
  },

});
 