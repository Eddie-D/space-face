
class FeedItem < ActiveRecord::Base
  attr_accessible :user_id, :description, :url, :type

  belongs_to :user

end