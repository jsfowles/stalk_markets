class CreateVendors < ActiveRecord::Migration
  def change
    create_table :vendors do |t|
      t.belongs_to :user
      t.string :first_name
      t.string :last_name
      t.string :business_name, null: false
      t.string :contact_phone, null: false
      t.string :contact_email, null: false
      t.string :website_link
      t.string :vendor_type, null: false

      t.timestamps null: false
    end
  end
end
