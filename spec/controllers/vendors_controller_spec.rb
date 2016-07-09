require 'rails_helper'

RSpec.describe Api::VendorsController, type: :controller do

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

		let(:vendor) { FactoryGirl.create(:vendor) }

		before(:each) do
			get :show, id: vendor.id
		end

		it "returns http success" do
			expect(response).to have_http_status(:success)
		end

		it "sets the vendor instance variable" do
			expect(assigns(:vendor).first_name).to eq(vendor.first_name)
		end

		# it "renders json show template" do
		# end
	end

	describe 'POST #create' do

		before(:each) do
			@vendor_params = { vendor: FactoryGirl.attributes_for(:vendor) }
			post :create, @vendor_params
		end

		it 'sets the school instance variable' do
			expect(assigns(:vendor)).to_not be_nil
			expect(assigns(:vendor).first_name).to eq(@vendor_params[:vendor][:first_name])
		end

		it "creates a new vendor" do
			expect(Vendor.count).to eq(1)
			expect(Vendor.first.first_name).to eq(@vendor_params[:vendor][:first_name])
		end

		# it "renders json error message" do
		# end
	end

	describe "PUT #update" do

		let(:vendor) { FactoryGirl.create(:vendor) }

		before(:each) do
			put :update, { id: vendor.id, vendor: {business_name: 'Fake Business'} }
		end

		it "sets the vendor instance variable" do
			expect(assigns(:vendor)).to_not eq(nil)
			expect(assigns(:vendor)).to eq(vendor)
		end

		it "updates the school" do
			expect(vendor.reload.business_name).to eq('Fake Business')
		end

		# it "renders the json error message on fail" do
		# end
	end

	describe "DELETE #destroy" do

		let(:vendor) { FactoryGirl.create(:vendor) }

		before(:each) do
			delete :destroy, id: vendor.id
		end

		it "sets the vendor instance variable" do
			expect(assigns(:vendor)).to eq(vendor)
		end

		it "destroys the vendor successfully" do
			expect(Vendor.count).to eq(0)
		end

		# it "renders json" do
		# end
	end
end