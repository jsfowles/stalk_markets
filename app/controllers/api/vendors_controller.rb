  class Api::VendorsController < ApplicationController

	before_action :vendor, except: [:index, :create]

  def index
  	render json: Vendor.all
  end

  # def new
  # end

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

  def show
  	render json: @vendor
  end

  # def edit
  # end

  def destroy
  	@vendor.destroy
  	render json: true
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
	      :contact_phone,
	      :contact_email,
	      :website_link,
	      :vendor_type
  			)
  	end
end
