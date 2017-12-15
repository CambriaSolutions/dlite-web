Feature: Interaction pattern for the traits section
  As a DMV Customer
  I want a page including the physical traits questions
  so that all the related interactions and questions will be in the same logical grouping

  Scenario: Selecting my physical traits
    Given I go to the new online DL application page
    When I visit physical traits page
    And I will see that the "Next" button is disabled
    And I select my sex
    And I select an eye color
    And I select a hair color
    Then I will see that the "Next" button is no longer disabled
    When I click "Next" to continue
    Then I will be on the page for entering my height and weight
    When I click to go back
    Then I will be on the page for entering my physical traits
    And I go to the page with my summary
    Then I will see my sex in the summary
    Then I will see my eye color in the summary
    Then I will see my hair color in the summary
