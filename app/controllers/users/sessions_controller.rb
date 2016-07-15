class Users::SessionsController < Devise::SessionsController
  respond_to :json
  skip_before_action :verify_authenticity_token

  def create
    self.resource = warden.authenticate!(auth_options)
    set_flash_message!(:notice, :signed_in)
    sign_in(resource_name, resource)
    user = resource.vendor ? resource.attributes.merge({vendor_id: resource.vendor.id}) : resource
    yield user if block_given?
    respond_with user, location: after_sign_in_path_for(resource)
  end
end
