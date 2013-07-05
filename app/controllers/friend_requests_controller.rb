class FriendRequestsController < ApplicationController

  def accept
    friend_request = FriendRequest.find(params[:id])
    friend_request.accept_request

    render :json => friend_request
  end
end
