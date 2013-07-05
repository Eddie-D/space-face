class UsersController < ApplicationController

  def index
    @users = User.all
    @friends = current_user.friends
    render :index
  end

  def search
    users = User.search(params[:search].downcase)
    render :json => users.to_json.html_safe
  end

end
