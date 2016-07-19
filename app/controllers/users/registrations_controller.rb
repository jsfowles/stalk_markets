class Users::RegistrationsController < Devise::RegistrationsController
  respond_to :json
  skip_before_action :verify_authenticity_token

  def create
  	super
  	# SignupMailer.new_signup(@user).deliver if @user
  end
end
