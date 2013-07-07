class RootController < ApplicationController
  before_filter :authenticate_user!

  def root
    @user = current_user.to_json(:include => [:requests, :friends, :likes])
    @photo = Photo.new
    render :root
  end

end
