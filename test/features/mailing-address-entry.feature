Feature: CRUD operations on the mailing address
  As a DMV customer
  I want to save my mailing address in my new online DL application
  So that the DMV knows how to get in touch with me

  Scenario: Seeing the additional address form for mailing
    Given I have already entered my residence address into the form
    Then I will see a checkbox to use my residence as my mailing address that is unchecked
    And I will see a field for mailing street, city, state, and zip
    And I will see a button to submit my mailing address

  Scenario: Choosing to use my residence as my mailing address
    Given I have already entered my residence address into the form
    When I click the checkbox to use my residence as my mailing address
    Then the form showing my mailing address will disappear

  Scenario: Entering my mailing address and saving
    Given I have already entered my residence address into the form
    When I enter my mailing address data
    And I click to submit my mailing address
    And I go to the page with my summary
    Then I will see my mailing address on that summary

  Scenario: Seeing a form with existing data
    Given I have already entered my residence address into the form
    And I have entered my mailing address
    When I visit '/about-me/addresses'
    Then I will see the mailing address I entered

  Scenario: Updating mailing address data
    Given I have already entered my residence address into the form
    And I have entered my mailing address
    When I visit '/about-me/addresses'
    And I change my mailing city
    And I go to the page with my summary
    Then I will see my updated mailing city