class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  acts_as_commontator

	def self.from_third_party_auth(provider, auth)
  	where(provider: provider, uid: auth[:userID]).first_or_create do |user|
  		user.email = auth[:email]
  		user.password = Devise.friendly_token
  		user.role = "Shopper"
  	end
  end

end
