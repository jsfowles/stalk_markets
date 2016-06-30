Rails.application.routes.draw do

  devise_for :users, controllers: {
       sessions: 'users/sessions',
       registrations: 'users/registrations'
     }

  root 'dashboard#index'

  resources :markets
  resources :vendors

  # Static pages about the website
  get '/about', to: 'static_pages#about', as: 'About'

  get '/about_us', to: 'static_pages#about_us', as: 'About_Us'

  get '*unmatched_route', to: 'dashboard#index'

end
