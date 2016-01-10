class AddIndexToUsers < ActiveRecord::Migration
  def change
    add_index :users, :email, unique: true
    add_index :users, :google_id_token, unique: true
  end
end
