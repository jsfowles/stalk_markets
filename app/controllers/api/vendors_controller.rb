  class Api::VendorsController < ApplicationController

  before_action :vendor, except: [:index, :create]

  def index
    render json: Vendor.all
  end

  def show
  	render json: @vendor
  end

  def create
     @vendor = Vendor.create(vendor_params)
    if @vendor
      render json: @vendor
    else
      render json: {errors: @vendor.errors.full_message}
    end
  end

  def update
     if @vendor.update(vendor_params)
      render json: @vendor.reload
    else
      render json: {errors: @vendor.errors.full_message}
    end
  end

  def profile
    render json: @vendor.markets
  end

  def destroy
  	@vendor.destroy
  	render json: true
  end

  def favorites
    vendors = []
    favorites = Favorite.where(user_id: current_user.id)
    favorites.each do |fav|
      vendors << Vendor.find(fav.vendor_id)
    end
    render json: vendors
  end

  private

  	def vendor
  		@vendor = Vendor.find_by(id: params[:id])
  	end

  	def vendor_params
  		params.require(:vendor).permit(
	  		:first_name,
	      :last_name,
	      :business_name,
        :description,
        :contact_email,
	      :contact_phone,
	      :website_link,
	      :vendor_type,
        :avatar,
        :user_id
  			)
  	end
end
