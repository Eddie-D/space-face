class StatusUpdatesController < ApplicationController

  def create
    status_update = current_user.
      status_updates.
      build(params[:status_update])

    if status_update.save
      render :json => status_update
    else
      render :json => status_update.errors, :status => 422
    end
    
  end
end
