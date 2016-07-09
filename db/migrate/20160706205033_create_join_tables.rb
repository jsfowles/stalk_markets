class CreateJoinTables < ActiveRecord::Migration
  def change
    create_table :join_tables do |t|
      t.integer :market_id
      t.integer :vendor_id

      t.timestamps null: false
    end
  end
end
