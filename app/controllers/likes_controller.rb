class LikesController < ApplicationController

  def create
    debugger
    like = current_user.likes.build(params[:like])
    if like.save
      render :json => like
    end  
  end

end
