class Vendor < ActiveRecord::Base
	has_many :join_tables
	has_many :markets, through: :join_tables, dependent: :destroy
	acts_as_commontable
	belongs_to :user
end
