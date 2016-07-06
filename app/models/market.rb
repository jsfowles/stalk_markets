class Market < ActiveRecord::Base
	has_many :join_tables
	has_many :vendors, through: :join_tables

	geocoded_by :full_address
	after_validation :geocode, :if => :address_changed?

	def full_address
   [address, city, state].compact.join(', ')
  end

end
