class StatusUpdate < ActiveRecord::Base
  # after_save :create_feed_item

  attr_accessible :body, :user_id


  validates_presence_of :body, :user_id

  belongs_to :user

  has_one :feed_item, :as => :feedable
  has_many :likes, :as => :likeable

  def create_feed_item
    FeedItem.create(:user_id => self.user_id,
                    :feedable_id => self.id,
                    :feedable_type => "StatusUpdate")
  end

  def is_liked
    likes.each do |like|
      if User.current.likes.include?(like)
        return true
      end
    end
    return false
  end
  
  def serializable_hash(options = {})
    super(options.merge({ :methods => [:is_liked] }))
  end

end
