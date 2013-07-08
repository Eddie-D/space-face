class AddDefaultProfilePicToUsers < ActiveRecord::Migration
  def change
    change_column :users, :profile_img_url, :string, :default => "https://s3-us-west-2.amazonaws.com/space-face-dev/photos/default-avatar.png"
  end
end
