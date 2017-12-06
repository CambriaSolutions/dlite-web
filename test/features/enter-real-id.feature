Feature: I want to request a Real ID along with my DL
As a customer who is getting a license
I would be like to be able to use my license to fly nationally
So that I don't need to get a passport just for this purpose

Scenario: Going to the starting page
Given I go to the new online DL application page
When I visit app intro page
And I click "Next" to continue
Then I will be on the page for entering my address
And I click to go back
Then I will be on the get started page

Scenario: Navigating to and from the real id page
Given I go to the new online DL application
And I visit the ID or DL selection page
When I click on the ID checkbox
And I click "Next" to continue
Then I will be on the page for choosing real id
When I click yes to getting a real id
And I click "Next" to continue
Then I will be on the get started page
And I click to go back
Then I will be on the page for choosing real id

Scenario: Choosing real id
Given I go to the new online DL application
When I visit the real id page
When I click yes to getting a real id
And I click "Next" to continue
Then I go to the page with my summary
Then I will see that I am getting a real id

Scenario: Opting out of real id
Given I go to the new online DL application
When I visit the real id page
When I click no to getting a real id
And I click "Next" to continue
Then I go to the page with my summary
Then I will see that I am not getting a real id