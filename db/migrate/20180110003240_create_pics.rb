class CreatePics < ActiveRecord::Migration[5.1]
  def change
    create_table :pics do |t|
      t.text :url
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
