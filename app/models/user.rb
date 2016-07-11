class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/
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
