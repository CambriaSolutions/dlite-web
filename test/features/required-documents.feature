Feature: Required documents page
  As a DMV customer
  I want to see what documents I need
  So I know what to bring

  Scenario: I have a social security number
    Given I go to the new online DL application page
    When I visit the social security page
    When I select Yes for social security
    When I enter my full social security number
    And I go to the page with my summary
    And I click to submit
    Then I will be on the page for appointment preparation
    And I click link for required documents
    Then I will be on the required documents page
    Then I will see proof of social security section

  Scenario: I do not have a social security number
    Given I go to the new online DL application page
    When I visit the social security page
    When I select No for social security
    And I go to the page with my summary
    And I click to submit
    Then I will be on the page for appointment preparation
    And I click link for required documents
    Then I will be on the required documents page
    Then I will not see the proof of social security section

  Scenario: I am requesting a Veteran's status
    Given I go to the new online DL application page
    And I visit the veteran services page
    When I click Yes for veteran
    When I click Yes to receiving additional information about benefits
    And I click Yes about having my license labeled with Veteran
    When I visit the required documents page
    Then I will see an additional bullet for proving my veterans status
    And I will see a section letting me know what I need to do to prove my status

  Scenario: I am not requesting a veteran's status
    Given I go to the new online DL application page
    And I visit the veteran services page
    When I click No for veteran
    When I visit the required documents page
    Then I will not see any information about proving veterans status