require 'spec_helper'

describe User do
  it "has a valid factory" do
    create(:user).should be_valid
  end
  it "is invalid when name is blank" do
    build(:user, name: nil).should_not be_valid
  end
  it "is invalid when email is blank" do
    build(:user, email: nil).should_not be_valid
  end
  it "is invalid when email is a bad email" do
    build(:user, email: "blah").should_not be_valid
  end
  it "is invalid when the password is too short" do
    build(:user, password: "short").should_not be_valid
  end
  it "is invalid when zip is blank" do
    build(:user, zip: nil).should_not be_valid
  end
end
