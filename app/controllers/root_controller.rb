class RootController < ApplicationController
  before_filter :authenticate_user!

  def root
    # @feed_items = current_user.feed_items.reverse
    @photo = Photo.new
    render :root
  end

end
