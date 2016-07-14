require 'rails_helper'

RSpec.describe Api::FavoritesController, type: :controller do

  describe "GET #index" do

    let(:favorite) { FactoryGirl.create(:favorite) }
    let(:vendor) { FactoryGirl.create(:vendor) }

    before(:each) do
      get :index
    end

    it "returns http success" do
      expect(response).to have_http_status(:success)
    end

    it "gets the current user id" do
      expect(assigns(:favorite).user_id).to eq(1)
    end

    it "finds the favorite vendors for the current user" do

    end

    # it "renders json" do
    # end
  end

  describe "POST #create" do

    before(:each) do
      @favorite_params = { favorite: FactoryGirl.attributes_for(:favorite) }
      post :create, @favorite_params
    end

    it "sets the vendor variable" do
      binding.pry
      expect(assigns(:favorite).vendor_id).to_not be_nil
    end

    it "creates new favorite"

    it "sets favorites vendor id to vendor.id"

    it "sets favorite user id to user.id"

    it "renders json"

  end

  describe "DELETE #destroy" do
    it "sets the favorite variable"

    it "destroys the favorite"

    it "renders json"
  end

end
