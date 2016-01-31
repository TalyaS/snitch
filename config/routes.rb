Rails.application.routes.draw do
  resources :snitches, only: [:new, :create, :index]

  root 'users#signin'

  get "signin", to: "users#signin"
  post "log_in", to: 'users#log_in'
end
