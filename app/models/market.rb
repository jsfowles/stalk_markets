class Market < ActiveRecord::Base
	geocoded_by :full_address
	after_validation :geocode, :if => :address_changed?

	def full_address
   [address, city, state].compact.join(', ')
  end

end
