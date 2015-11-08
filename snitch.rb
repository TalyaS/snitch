require 'data_mapper'

DataMapper::setup(:default, "sqlite3://#{Dir.pwd}/snitch.db")
 
class Snitch
  include DataMapper::Resource
  property :id, Serial
  property :content, Text, :required => true
  property :created_at, DateTime
  property :updated_at, DateTime
end
 
DataMapper.finalize.auto_upgrade!


get '/' do
  @snitches = Snitch.all order: :id.desc
  @title = 'All Snitches'
  erb :home
end


post '/' do
  snitch = Snitch.new
  snitch.content = params[:content]
  snitch.created_at = Time.now
  snitch.updated_at = Time.now
  snitch.save
  redirect '/'
end