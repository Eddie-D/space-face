class FriendsController < ApplicationController

  def index
    user = User.find(params[:user_id])
    friends = user.friends.to_json.html_safe
    render :json => friends
  end
end
