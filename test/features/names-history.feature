Feature: Enter my previously used Names
  As a DMV Customer
  I want to enter my previously used names
  so that I can link my identities together

  Scenario: Selecting Yes
    Given I go to the new online DL application page
    When I visit the page to choose if I ever had previous names
    And I will see that the "Next" button is disabled
    When I select previously used names Yes
    And I enter my previously used names
    Then I will see that the "Next" button is no longer disabled
    When I click "Next" to continue
    Then I will be taken to the license issues page
    When I click to go back
    Then I will be taken to previous names page
    And I go to the page with my summary
    Then I will see Yes for having a previous name

  Scenario: Selecting No
    Given I go to the new online DL application page
    When I visit the page to choose if I ever had previous names
    And I will see that the "Next" button is disabled
    When I select previously used names No
    Then I will see that the "Next" button is no longer disabled
    When I click "Next" to continue
    Then I will be taken to the license issues page
    When I click to go back
    Then I will be taken to previous names page
    And I go to the page with my summary
    Then I will see No for having a previous name
