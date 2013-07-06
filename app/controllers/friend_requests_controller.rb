class FriendRequestsController < ApplicationController

  def accept
    friend_request = FriendRequest.find(params[:id])
    friend_request.accept_request

    render :json => friend_request
  end

  def create
    request = FriendRequest.new(:user_id => current_user.id, :friend_id => params[:friend_id])
    if request.save
      render :json => request
    end
  end
end
