Feature: Choose if you want to change or add a political party or not
  As a DMV Customer
  I want the choice to add or update a political party preference
  so that I choose to go into the party preference information or skip it

  Scenario: Selecting Yes
    Given I go to the new online DL application page
    When I visit the political party choose page
    And I will see that the Continue button is disabled
    When I select Yes
    Then I will see that the Continue button is no longer disabled
    When I click to submit
    Then I will be taken to political party page

  Scenario: Selecting No
    Given I go to the new online DL application page
    When I visit the political party choose page
    And I will see that the Continue button is disabled
    When I select no political party
    Then I will see that the Continue button is no longer disabled
    When I click to submit
    Then I will be on the page for ballot by mail
