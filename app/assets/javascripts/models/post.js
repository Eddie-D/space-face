SpaceFace.Models.Post = Backbone.Model.extend({

  parse: function(resp) {
    console.log("parsing....");
    switch (resp.feedable_type){
      case "StatusUpdate":
        resp.feedable = new SpaceFace.Models.StatusUpdate(resp.feedable, {parse: true});
      break;
      case "Photo":
        resp.feedable = new SpaceFace.Models.Photo(resp.feedable, {parse: true});
      break;
      default: 
      break;
    }


    return resp;
  }
});
