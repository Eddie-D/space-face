SpaceFace.Models.Post = Backbone.Model.extend({

  parse: function(resp) {
    console.log("parsing....");
    switch (resp.feedable_type){
      case "StatusUpdate":
        resp.feedable = new SpaceFace.Models.StatusUpdate(resp.feedable)
      break;
      default: 
      break;
    }


    return resp;
  }
});
