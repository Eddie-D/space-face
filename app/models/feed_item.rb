class FeedItem < ActiveRecord::Base
  attr_accessible :user_id, :feedable_id, :feedable_type

  belongs_to :feedable, :polymorphic => true, :dependent => :destroy
end
