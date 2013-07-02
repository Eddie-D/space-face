class FriendRequest < ActiveRecord::Base
  attr_accessible :user_id, :friend_id, :status

  belongs_to :user
  belongs_to :friend, 
             :class_name => "User",
             :foreign_key => :friend_id


  def accept_request
  
  self.transaction do
    self.update_attributes(:status => "accepted")
    Friendship.create(:user_id => self.user_id,
                      :friend_id => self.friend_id)
    Friendship.create(:user_id => self.friend_id,
                      :friend_id => self.user_id)
  end

  end
end
