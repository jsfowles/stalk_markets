class Api::FavoritesController < ApplicationController

  def index
  	favorites = Favorite.where(user_id: current_user.id)
  	render json: favorites
  end

  def create
    vendor = Vendor.find(params[:id])
    favorite = Favorite.new
  	favorite[:vendor_id] = vendor.id
  	favorite[:user_id] = current_user.id
    if favorite.save
      render json: favorite
    else
  	 render json: {errors: favorite.errors.full_message}
    end
  end

  def destroy
    favorite = Favorite.find_by(params[:id])
    favorite.destroy
    render json: true
  end

  private
  	def favorite_params
  		params.require(:favorite).permit(:user_id, :vendor_id)
  	end
end
