class CreateSnitches < ActiveRecord::Migration
  def change
    create_table :snitches do |t|
      t.string :content

      t.timestamps null: false
    end
  end
end
