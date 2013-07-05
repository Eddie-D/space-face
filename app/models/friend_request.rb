class FriendRequest < ActiveRecord::Base
  attr_accessible :user_id, :friend_id, :status

  belongs_to :user
  belongs_to :friend, 
             :class_name => "User",
             :foreign_key => :friend_id


  def accept_request
    self.transaction do
      Friendship.create(:user_id => self.user_id,
                        :friend_id => self.friend_id)
      Friendship.create(:user_id => self.friend_id,
                        :friend_id => self.user_id)
      self.destroy
    end
  end

  def serializable_hash(options = {})
    super(options.merge({ :include => :user }))
  end
end
