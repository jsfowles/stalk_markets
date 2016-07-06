Rails.application.routes.draw do

  devise_for :users, controllers: {
       sessions: 'users/sessions',
       registrations: 'users/registrations'
     }

  root 'dashboard#index'
  namespace :api do
    resources :markets
    resources :vendors
    resources :join_tables
    get '/vendors/:id/profile', to: "vendors#profile", as: "vendor_profile"
  end

  get '*unmatched_route', to: 'dashboard#index'

end
