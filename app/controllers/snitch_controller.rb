class SnitchController < ApplicationController
  def index
    @snitches = Snitch.order("id desc").all
  end
end
