SpaceFace.Models.FriendRequest = Backbone.RelationalModel.extend({

  relations: [{
    type: Backbone.HasOne,
    key: "sender",
    keySource: "user",
    relatedModel: "SpaceFace.Models.User",
    collectionType: "SpaceFace.Collections.Users"
  }]
  
});
