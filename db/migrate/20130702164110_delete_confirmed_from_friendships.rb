class DeleteConfirmedFromFriendships < ActiveRecord::Migration
  def change 
    remove_column :friendships, :confirmed
  end
end
