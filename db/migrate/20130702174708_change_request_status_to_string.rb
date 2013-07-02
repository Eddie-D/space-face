class ChangeRequestStatusToString < ActiveRecord::Migration
  def change
    change_column :friend_requests, :status, :string
  end
end
