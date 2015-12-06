class SnitchesController < ApplicationController
  skip_before_action :verify_authenticity_token
  respond_to :json, :html

  def index
    @snitches = Snitch.order("id desc").all
  end

  def show
    @snitches = Snitch.order("id desc").all

    respond_with @snitches
  end

  def create
    Snitch.create(content: params[:content])

    render nothing: true, status: 204
  end
end
