class Photo < ActiveRecord::Base
  attr_accessible :user_id, :description, :photo

  validates_presence_of :user_id

  belongs_to :user

  has_one :feed_item, :as => :feedable

  has_attached_file :photo

  def create_feed_item
    FeedItem.create(:user_id => self.user_id,
                    :feedable_id => self.id,
                    :feedable_type => "Photo")
  end

  def url
    photo.url
  end

  def serializable_hash(options = {})
    super(options.merge({ :methods => [:url] }))
  end

end
