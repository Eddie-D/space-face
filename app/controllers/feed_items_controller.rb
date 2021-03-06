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
    users = nil
    if params[:user_id]
      users = params[:user_id]
    else
      users = current_user.friends.all
      users << current_user
      users.map! { |u| u.id }  
    end

    items = FeedItem.where(:user_id => users).includes(:feedable => :user).reverse
    feed_items = items.to_json(:include => {:feedable => {
                                              :include => [:user, :likes, :comments]
                                              }
                                            })
    render :json => feed_items
    
  end
end
