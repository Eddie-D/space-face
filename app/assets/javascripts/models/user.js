SpaceFace.Models.User = Backbone.RelationalModel.extend({

  relations: [{
    type: Backbone.HasMany,
    key: "friendRequests",
    keySource: "requests",
    relatedModel: "SpaceFace.Models.FriendRequest",
    collectionType: "SpaceFace.Collections.FriendRequests",
    reverseRelation: {
      key: "receiver"
    }
  }]

});
