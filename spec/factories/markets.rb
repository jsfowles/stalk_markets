FactoryGirl.define do
	factory :market, class: Market do
		user_id 1
		name "Taylor's Market"
		start_date "0"
		end_date "0"
		start_time 7
		end_time 2
		day_of_week "Friday"
		address "370 E 300 S"
		city "Salt Lake City"
		state "UT"
		zip 84123
		contact_phone "1234567"
		pet_friendly true
		crafts true
		alcohol true
		prepared_food true
	end
end