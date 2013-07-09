class PhotosController < ApplicationController

  def index
    photos = Photo.where(:user_id => params[:user_id])
    render :json => photos
  end

  def create
    photo = current_user.photos.build(params[:photo])
    
    if photo.save
      feed_item = photo.create_feed_item
      feed_item = feed_item.to_json(:include => {:feedable => {
                                                  :include => [:user, :likes]
                                                  }
                                                })
      render :json => feed_item
    else
      render :json => photo
    end    
  end
end
