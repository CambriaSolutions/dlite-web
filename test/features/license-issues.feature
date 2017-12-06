Feature: Select and enter my revoked, refused or suspended license info
  As a DMV Customer
  I want to designate and enter if I had a revoked, refused or suspended license
  so that I can address these issues with the DMV

  Scenario: Yes I had a revoked license & entering information into the form
    Given I go to the new online DL application page
    When I visit the license issues page
    And I will see that the "Next" button is disabled
    When I select suspended licence Yes
    Then I will see that the "Next" button is no longer disabled
    And I will see input fields for date and reason for suspension
    When I enter date of my license suspension
    And I enter the reason for my license suspension
    When I click "Next" to continue
    Then Then I will be on the page for veteran related services
    And I go to the page with my summary
    Then I will see Yes in my suspended license selection
    Then I will see the date and reason for my license suspension

  Scenario: I do not have a revoked license
    Given I go to the new online DL application page
    When I visit the license issues page
    And I will see that the "Next" button is disabled
    When I select suspended license No
    Then I will see that the "Next" button is no longer disabled
    When I click "Next" to continue
    Then Then I will be on the page for veteran related services
    And I go to the page with my summary
    Then I will see No in my suspended license selection

  Scenario: I want to go back to previous page
    Given I go to the new online DL application page
    When I visit the license issues page
    When I click to go back
    Then I will be taken to previous names page
