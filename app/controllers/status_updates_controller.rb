class StatusUpdatesController < ApplicationController

  def create
    status_update = current_user.
      status_updates.
      build(params[:status_update])

    if status_update.save
      feed_item = status_update.create_feed_item
      feed_item = feed_item.to_json(:include => {:feedable => {
                                                  :include => [:user, :likes]
                                                  }
                                                })
      render :json => feed_item
    else
      render :json => status_update.errors, :status => 422
    end
    
  end
end
