require 'spec_helper'

FactoryBot.define do
  factory :user do
    name "test user"
    email "test@example.com"
    password "password"
    zip 06511
  end
end
