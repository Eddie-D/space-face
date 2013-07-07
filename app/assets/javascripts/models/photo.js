SpaceFace.Models.Photo = Backbone.RelationalModel.extend({

  relations: [{
    type: Backbone.HasMany,
    key: "likes",
    keySource: "likes",
    relatedModel: "Spaceface.Models.Like",
    collectionType: "Spaceface.Collections.Likes"
  }],

  url: "/photos",
  
  render: function(){
    var view = new SpaceFace.Views.PhotoFeed({
      model: this
    });
    return view.render();
  },

});
