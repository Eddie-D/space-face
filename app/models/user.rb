class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email,
                  :password,
                  :password_confirmation,
                  :remember_me,
                  :name,
                  :profile_img_url

  

  has_many :status_updates
  has_many :photos
  has_many :feed_items
  has_many :likes
  has_many :comments

  has_many :requests,
           :foreign_key => :friend_id,
           :class_name => "FriendRequest"

  has_many :friend_requests,
           :through => :requests,
           :source => :user

  has_many :friendships
  has_many :friends,
           :through => :friendships

  def self.current
    Thread.current[:user]
  end

  def self.current=(user)
    Thread.current[:user] = user
  end

  def self.search(search)
    if search
      where(self.arel_table[:name].matches("%#{search}%"))
    else
      find(:all)
    end
  end

end
