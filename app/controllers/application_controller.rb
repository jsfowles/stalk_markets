class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_filter :configure_sign_up_params, if: :devise_controller?

  protected
    def configure_sign_up_params
      devise_parameter_sanitizer.permit(:sign_up,
                                        keys: [
                                          :email,
                                          :password,
                                          :password_confirmation,
                                          :role
                                        ]
      )
    end
end
