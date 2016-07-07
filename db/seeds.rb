include Sprig::Helpers

sprig [Market]

10.times do |n|
  Vendor.create(
    first_name: Faker::Name.name,
    last_name: Faker::Name.name,
    business_name: Faker::Company.name,
    contact_phone: Faker::PhoneNumber.phone_number,
    contact_email: Faker::Internet.email,
    website_link: Faker::Internet.url,
    vendor_type: Faker::Commerce.department)
