class Comment < ActiveRecord::Base
  attr_accessible :user_id, :body, :commentable_id, :commentable_type

  validates_presence_of :user_id, :body

  belongs_to :commentable, :polymorphic => true
  belongs_to :user

  def serializable_hash(options = {})
    super(options.merge({:include => :user}))
  end
end
