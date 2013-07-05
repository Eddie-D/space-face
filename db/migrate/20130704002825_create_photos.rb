class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.attachment :photo
      t.integer :user_id
      t.text :description
      t.timestamps
    end
  end
end
