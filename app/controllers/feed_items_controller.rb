class FeedItemsController < ApplicationController

  def create
    feed_item = current_user.feed_items.create(params[:feed_item])
    
    if feed_item.save
      redirect_to :root
    else
      flash[:errors] << "Status could not be uploaded" 
    end
  end
end
