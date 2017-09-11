Feature:  I want to enter my name
  As a DMV customer
  I want to save my name in my new online DL application
  So that my id is issued with the correct name

  Scenario: Entering my name and saving
    Given I go to the new online DL application page
    When I visit the legal name page
    Then I will see a field for first, middle and last name
    And I will see that the Continue button is disabled
    When I enter my first name
    And I enter my middle name
    And I enter my last name
    Then I will see that the Continue button is no longer disabled
    When I click to submit
    Then I will be on the page for entering my date of birth
    When I return to the home page
    And I go to the page with my summary
    Then I will see my name on that summary

  Scenario: Updating name data
    Given I go to the new online DL application page
    And I have already entered my name into the form
    When I visit the legal name page
    Then I will see the name I entered
    When I change my first name
    And I click to submit
    And I return to the home page
    And I go to the page with my summary
    Then I will see my updated name
