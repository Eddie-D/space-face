class FeedItemsController < ApplicationController

  def create
    feed_item = current_user.feed_items.create(params[:feed_item])
    
    if feed_item.save
      redirect_to :root
    else
      flash[:errors] << "Status could not be uploaded" 
    end
  end

  def index
    users = current_user.friends
    users << current_user
    items = FeedItem.where(:user_id => users).reverse
    feed_items = items.to_json(:include => {:feedable => {
                                              :include => :user
                                              }
                                            })
    render :json => feed_items
    
  end
end
