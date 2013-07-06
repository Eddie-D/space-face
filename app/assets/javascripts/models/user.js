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
  },{
    type: Backbone.HasMany,
    key:"friends",
    relatedModel: "SpaceFace.Models.User",
    collectionType: "SpaceFace.Collections.Users"
  }],

  isFriend: function() {
    if (SpaceFace.CurrentUser.get("friends").findWhere({id: this.id})) {
      return true;
    }else {
      return false;
    }
  }

});
