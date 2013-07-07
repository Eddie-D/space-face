SpaceFace.Models.Post = Backbone.RelationalModel.extend({

  parse: function(resp) {
    console.log("parsing....");
    switch (resp.feedable_type){
      case "StatusUpdate":
        resp.feedable = new SpaceFace.Models.StatusUpdate(resp.feedable);
      break;
      case "Photo":
        debugger
        resp.feedable = new SpaceFace.Models.Photo(resp.feedable);
      break;
      default: 
      break;
    }


    return resp;
  }
});
