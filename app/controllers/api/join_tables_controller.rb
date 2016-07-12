class Api::JoinTablesController < ApplicationController
 before_action :table, except: [:index, :create]

  def index
    render json: JoinTable.all
  end

  def show
    render json: @table
  end

  def create
    params[:selectedMarkets].each do |market_id|
      @table = JoinTable.create(market_id: market_id, vendor_id: params[:vendor_id])
      if @table
        render json: @table
      else
        render json: {errors: @table.errors.full_message}
      end
    end
  end

  def update
    if @table.update(table_params)
      render json: @table.reload
    else
      render json: {errors: @table.errors.full_message}
    end
  end

  def destroy
    @table.destroy
    render json: true
  end

  private

    def table
     @table = JoinTable.find_by(id: params[:id])
    end

    def table_params
      params.require(:join_table).permit(
        :market_id, :vendor_id )
    end
end
