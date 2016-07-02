class CreateMarkets < ActiveRecord::Migration
  def change
    create_table :markets do |t|
      t.belongs_to :user
      t.string :name
      t.date :start_date
      t.date :end_date
      t.integer :start_time
      t.integer :end_time
      t.string :day_of_week
      t.string :address
      t.string :city
      t.string :state
      t.integer :zip
      t.string :contact_phone
      t.boolean :pet_friendly
      t.boolean :crafts
      t.boolean :alcohol
      t.boolean :prepared_food
      t.attachment :image

      t.timestamps null: false
    end
  end
end
