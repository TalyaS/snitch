Rails.application.routes.draw do
  resource :snitches, only: [:new, :create, :show]

  root 'snitches#index'

  post "users/log_in", to: 'users#log_in'
end
