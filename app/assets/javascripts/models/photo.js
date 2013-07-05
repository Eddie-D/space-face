SpaceFace.Models.Photo = Backbone.Model.extend({
  url: "/photos",
  
  render: function(){
    var view = new SpaceFace.Views.PhotoFeed({
      model: this
    });
    return view.render();
  }

});
