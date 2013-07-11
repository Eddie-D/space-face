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

  def update
    user = User.find(params[:id])
    user.update_attributes(:profile_img_url => params[:profile_img_url])
    render :json => user

  end

end
