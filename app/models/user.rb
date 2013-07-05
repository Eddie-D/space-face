class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me, :name
  # attr_accessible :title, :body

  has_many :status_updates
  has_many :photos
  has_many :feed_items

  has_many :requests,
           :foreign_key => :friend_id,
           :class_name => "FriendRequest"

  has_many :friend_requests,
           :through => :requests,
           :source => :user

  has_many :friendships
  has_many :friends,
           :through => :friendships

end
