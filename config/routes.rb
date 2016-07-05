Rails.application.routes.draw do

  devise_for :users, controllers: {
       sessions: 'users/sessions',
       registrations: 'users/registrations'
     }

  root 'dashboard#index'
  namespace :api do
    resources :markets
    resources :vendors
  end

  get '*unmatched_route', to: 'dashboard#index'

end
