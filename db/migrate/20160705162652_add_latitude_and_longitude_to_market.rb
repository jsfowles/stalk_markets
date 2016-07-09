class AddLatitudeAndLongitudeToMarket < ActiveRecord::Migration
  def change
    add_column :markets, :latitude, :float
    add_column :markets, :longitude, :float
  end
end
