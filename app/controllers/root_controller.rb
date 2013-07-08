class RootController < ApplicationController
  before_filter :authenticate_user!
  
  #This lets me access the current user in the models
  #Determining whether current user has liked a post, etc

  def root
    @user = current_user.to_json(:include => [:requests, :friends, :likes])
    @photo = Photo.new
    render :root
  end

end
