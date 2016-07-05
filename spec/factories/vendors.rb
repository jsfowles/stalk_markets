FactoryGirl.define do
	factory :vendor, class: Vendor do
		user_id 1
		first_name "Taylor"
		last_name "Wu"
		business_name "Farmer Market"
		contact_phone "1234567"
		contact_email "test@test.com"
		website_link "https://www.google.com/"
		vendor_type "Produce"
	end
end