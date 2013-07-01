class CreateFeedItems < ActiveRecord::Migration
  def change
    create_table :feed_items do |t|
      t.string :type
      t.integer :user_id
      t.text :description
      t.string :url
      t.timestamps
    end
  end
end
