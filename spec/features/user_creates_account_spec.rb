require "rails_helper"

#Capybara.default_driver = :selenium

feature "User creates account", js: true do
  scenario "successfully" do
    visit '/'
    click_on "Sign up"
    fill_in "Name", with: "example"
    fill_in "Email", with: "example@example.com"
    fill_in "Password", with: "password"
    fill_in "Confirmation", with: "password"
    click_on "Create my account"
    visit root_url
    expect(page).to have_content "Task List"
    expect(page).to have_content "Account"
  end
end
