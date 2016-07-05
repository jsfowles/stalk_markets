10.times do |n|
  Vendor.create(
            first_name: Faker::Name.name,
             last_name: Faker::Name.name,
             business_name: Faker::Company.name,
             contact_phone: Faker::PhoneNumber.phone_number,
             contact_email: Faker::Internet.email,
             website_link: Faker::Internet.url,
             vendor_type: Faker::Commerce.department)
end

10.times do |n|
  Market.create(name: Faker::Company.name,
             start_date: Faker::Date.between(2.days.ago, Date.today),
             end_date: Faker::Date.between(2.days.ago, Date.today),
             start_time: [7,8,9,10].sample,
             end_time: [11,12,1,2,3,4,5,6].sample,
             day_of_week: 'Friday',
             address: Faker::Address.street_address,
             city: Faker::Address.city,
             state: Faker::Address.state,
             zip: Faker::Address.zip,
             contact_phone: Faker::PhoneNumber.phone_number,
             pet_friendly: Faker::Boolean.boolean(0.2),
             crafts: Faker::Boolean.boolean(0.2),
             alcohol: Faker::Boolean.boolean(0.2),
             prepared_food: Faker::Boolean.boolean(0.2),
             latitude: Faker::Address.latitude,
             longitude: Faker::Address.longitude)
end
