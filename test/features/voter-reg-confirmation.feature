Feature: Voter Registration Completion page
  As a DMV Customer
  I want a page telling me I completed the voter registration process
  so that I will know what to expect for the next steps

  Scenario: Continuing from voter registration complete page
    Given I go to the new online DL application page
    When I visit voter registration complete page
    Then I see text for voter registration complete page
    When I click "Next" to continue
    Then I will be on the page with my summary

  Scenario: I want to go back to previous page
    Given I go to the new online DL application page
    When I visit voter registration complete page
    When I click to go back
    Then I will be taken to contact methods page

  
  