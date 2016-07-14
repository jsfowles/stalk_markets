class CreateMarkets < ActiveRecord::Migration
  def change
    create_table :markets do |t|
      t.belongs_to :user
      t.string :name
      t.string :start_date
      t.string :end_date
      t.integer :start_time
      t.integer :end_time
      t.string :day_of_week
      t.string :address
      t.string :city
      t.string :state
      t.integer :zip
      t.string :contact_phone
      t.string :pet_friendly
      t.string :crafts
      t.string :alcohol
      t.string :prepared_food
      t.attachment :image

      t.timestamps null: false
    end
  end
end
