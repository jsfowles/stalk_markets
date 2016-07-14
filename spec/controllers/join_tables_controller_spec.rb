require 'rails_helper'

RSpec.describe Api::JoinTablesController, type: :controller do

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

		let(:jointable) { FactoryGirl.create(:jointable) }

		before(:each) do
			get :show, id: jointable.id
		end

		it "returns http success" do
			expect(response).to have_http_status(:success)
		end

		# it "sets the table variable" do
		# 	expect(assigns(:jointable).object_id).to eq(8)
		# end

		# it "renders json" do
		# end
	end

	describe "POST #create" do

		before(:each) do
			@table_params = { jointable: FactoryGirl.attributes_for(:jointable) }
			post :create, @table_params
		end

		it "sets table as an empty array" do
			expect(assigns(:table)).to eq(Array.new)
		end

		it "sets the join variable"

		it "creates a new join table"

		it "renders json"
	end

	describe "PUT #update" do
		it "sets the join table variable"

		it "updates the join table"

		# it "renders json" do
		# end
	end

	describe "DELETE #destroy" do
		it "sets the join table variable"

		it "destroys the join table"

		# it "renders json" do
		# end
	end
end