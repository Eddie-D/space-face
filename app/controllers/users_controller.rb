class UsersController < ApplicationController

  def index
    @users = User.all
    @friends = current_user.friends
    render :index
  end

end
