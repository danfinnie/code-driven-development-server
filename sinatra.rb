require 'sinatra'
require 'coderay'
require 'code_driven_development'

get '/' do
  File.read("index.html")
end

get '/script' do
  content_type :js
  File.read("script.js")
end

post '/testify' do
  code = request["code"]
  test = CodeDrivenDevelopment::CodeDrivenDevelopment.new(code).test_code.strip
  CodeRay.scan(test, :ruby).div(:line_numbers => :table)
end

get '/coderay.css' do
  content_type :css
  CodeRay::Encoders[:html]::CSS.new(:default).stylesheet
end

get '/stylez.css' do
  content_type :css
  File.read("stylez.css")
end
