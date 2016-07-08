class Api::MarketsController < ApplicationController

  before_action :market, except: [:index, :create]

  def index
    if params[:filter]
      # do all the filter logic and return markets
    else
      render json: Market.all
    end
  end

  def show
    render json: @market
  end

  def create
    @market = Market.create(market_params)
    if @market
      render json: @market
    else
      render json: {errors: @market.errors.full_message}
    end
  end

  def update
    if @market.update(market_params)
      render json: @market.reload
    else
      render json: {errors: @market.errors.full_message}
    end
  end

  def destroy
    @market.destroy
    render json: true
  end

  private

    def market
     @market = Market.find_by(id: params[:id])
    end

    def market_params
      params.require(:market).permit(
        :name,
        :start_date,
        :end_date,
        :start_time,
        :end_time,
        :day_of_week,
        :address,
        :city,
        :state,
        :zip,
        :contact_phone,
        :pet_friendly,
        :crafts,
        :alcohol,
        :prepared_food,
        :image
      )
    end
end
