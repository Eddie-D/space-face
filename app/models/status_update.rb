class StatusUpdate < ActiveRecord::Base
  # after_save :create_feed_item

  attr_accessible :body, :user_id


  validates_presence_of :body, :user_id

  belongs_to :user

  has_one :feed_item, :as => :feedable

  def create_feed_item
    FeedItem.create(:user_id => self.user_id,
                    :feedable_id => self.id,
                    :feedable_type => "StatusUpdate")
  end

end
