Rails.application.routes.draw do

  mount Commontator::Engine => '/commontator'

  devise_for :users, controllers: {
       sessions: 'users/sessions',
       registrations: 'users/registrations'
     }


  root 'dashboard#index'
  namespace :api do
    get '/vendors/favorites', to: 'vendors#favorites'
    resources :markets
    resources :vendors
    resources :join_tables
    resources :favorites, except: :destroy
    delete '/favorites', to: 'favorites#destroy'
    get '/has_favorite', to: 'favorites#has_favorite'
    get '/vendors/:id/profile', to: "vendors#profile", as: "vendor_profile"
    get '/markets/:id/profile', to: "markets#profile", as: "market_profile"
  end

  # Facebook Login
  post 'facebook_login', to: 'third_party_auth#facebook'


  get '*unmatched_route', to: 'dashboard#index'

end
