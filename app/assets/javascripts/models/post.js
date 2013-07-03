SpaceFace.Models.Post = Backbone.Model.extend({

  parse: function(resp) {
    switch (resp.feedable_type){
      case "StatusUpdate":
        console.log("Status Update!!!");
        resp.feedable = new SpaceFace.Models.StatusUpdate(resp.feedable)
      break;
      default: 
      break;
    }


    return resp;
  }
});
