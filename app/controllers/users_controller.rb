class UsersController < ApplicationController
  def log_in
    user = User.find_or_initialize(params[:email])
    user.google_id_token = params[:google_id_token]
    user.name = params[:name]
    user.image_url = params[:image_url]

    render nothing: true, status: 204
  end
end
