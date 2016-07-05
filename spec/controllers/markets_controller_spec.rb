require 'rails_helper'

RSpec.describe Api::MarketsController, type: :controller do

	describe "GET #index" do

		before(:each) do
			get :index
		end

		it "returns http success" do
			expect(response).to have_http_status(:success)
		end

		# it "renders json" do
		# end
	end

	describe "GET #show" do

		let(:market) { FactoryGirl.create(:market) }

		before(:each) do
			get :show, id: market.id
		end

		it "returns http success" do
			expect(response).to have_http_status(:success)
		end

		it "sets the market instance variable" do
			expect(assigns(:market).name).to eq(market.name)
		end

		# it "renders json show template" do
		# end
	end

	describe "POST #create" do

		before(:each) do
			@market_params = { market: FactoryGirl.attributes_for(:market) }
			post :create, @market_params
		end

		it "sets the market instance variable" do
			expect(assigns(:market)).to_not be_nil
			expect(assigns(:market).name).to eq(@market_params[:market][:name])
		end

		it "creates a new market" do
			expect(Market.count).to eq(1)
			expect(Market.first.name).to eq(@market_params[:market][:name])
		end

		# it "renders json"
		# end
	end

	describe "PUT #update" do

		let(:market) { FactoryGirl.create(:market) }

		before(:each) do
			put :update, {id: market.id, market: { name: "Fake Market" } }
		end

		it "sets the market instance variable" do
			expect(assigns(:market)).to_not eq(nil)
			expect(assigns(:market)).to eq(market)
		end

		it "updates the market" do
			expect(market.reload.name).to eq('Fake Market')
		end

		# it "renders json error message on fail" do
		# end
	end

	describe "DELETE #destroy" do

		let(:market) { FactoryGirl.create(:market) }

		before(:each) do
			delete :destroy, id: market.id
		end

		it "sets the market instance variable" do
			expect(assigns(:market)).to eq(market)
		end

		it "destroys the market successfully" do
			expect(Market.count).to eq(0)
		end

		# it "renders json" do
		# end
	end
end






