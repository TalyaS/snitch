class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :image_url
      t.string :google_id_token

      t.timestamps null: false
    end
  end
end
