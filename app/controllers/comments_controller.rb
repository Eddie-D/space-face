class CommentsController < ApplicationController

  def create
    comment = current_user.comments.build(params[:comment])


    if comment.save
      render :json => comment
    else
      render :json => comment.errors, :status => 422
    end
  end
end
