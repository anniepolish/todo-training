require "rails_helper"

#Capybara.default_driver = :selenium

feature "User creates account" do
  scenario "successfully" do
    visit root_url
    click_on "Sign up"
    fill_in "Name", with: "example"
    fill_in "Email", with: "example@example.com"
    fill_in "Zip code", with: "06511"
    fill_in "Password", with: "password"
    fill_in "Confirmation", with: "password"
    click_on "Create my account"
    click_on "Home"
    expect(page).to have_content "Task List"
    expect(page).to have_content "Account"
  end
end
