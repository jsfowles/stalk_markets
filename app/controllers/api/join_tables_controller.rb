class Api::JoinTablesController < ApplicationController
 before_action :table, except: [:index, :create, :destroy]

  def index
    render json: JoinTable.all
  end

  def show
    render json: @table
  end

  def create
    @table = []
    params[:selectedMarkets].each do |market_id|
      joins = JoinTable.create(market_id: market_id, vendor_id: params[:vendor_id])
      @table.push(joins)
    end
    if @table
      render json: @table
    else
      render json: {errors: @table.errors.full_message}
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
    tables = JoinTable.where("vendor_id = ? AND market_id = ?", params[:vendor_id], params[:id])
    tables.destroy_all
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
