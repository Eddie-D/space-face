class RootController < ApplicationController
  before_filter :authenticate_user!

  def root
    @feed_items = current_user.feed_items.reverse

    render :root
  end

end
