Feature: Voter Preference page for already registered voters
  As a DMV Customer
  I want a voter preference page for people that are already registered to vote (voter-preferences-intro-updated)
  so that I will know what to expect for the next steps

  Scenario: Continuing from preregistered page
    Given I go to the new online DL application page
    Given I visit voter opt out page
    When I select I am already registered to vote in California
    And I click "Next" to continue
    Then I will be taken to updated voter preferences info page
    Then I see text for updating voter preferences render
    When I click "Next" to continue
    Then I will be taken to the political party choose page
    When I click to go back
    Then I will be taken to updated voter preferences info page
