class LikesController < ApplicationController

  def create
    like = current_user.likes.build(params[:like])
    if like.save
      render :json => like
    end  
  end

  def destroy
    likeable_id = params[:like][:likeable_id]
    likeable_type = params[:like][:likeable_type]
    user_id = current_user.id
    like = Like.where(
        :user_id => user_id,
        :likeable_id => likeable_id,
        :likeable_type => likeable_type)
    debugger

    if Like.destroy(like)
      render :json => like
    end
  end

end
