Feature: CDL application
As a DMV customer
I would like to be able to choose whether I need a CDL or an ID/DL application
So that I can get what I need easily

Scenario: Navigating to the new page
  Given I go to the new online DL application page
  And I visit the page to choose application language
  When I click to continue
  Then I will be on the page to choose application
  When I select a commercial DL application
  And I click "Next" to continue
  Then I will be on the CDL welcome page
  When I click to go back
  Then I will be on the page to choose application
  When I select a regular ID or DL application
  And I click "Next" to continue
  Then I will be on the IDDL welcome page

Scenario: Name page
  Given I go to the new online DL application page
  When I visit the CDL name page
  When I click "Next" to continue
  Then I will see an error message telling me to enter my name
  When I enter my full name
  And I click "Next" to continue
  Then I will be on the CDL dob page
  When I click to go back
  Then I will be on the CDL name page
  And I click "Next" to continue
  When I click "Next" to continue
  Then I will see an error message telling me to enter a valid date
  When I indicate that I am between 17.5 and 18
  Then I will see an info message box show up letting me know limitations on my CDL based on my age
  When I click "Next" to continue
  Then I will be on the CDL WDYWTDT page
  When I select a new commercial DL
  When I go to the CDL summary
  And I will see my name on that summary
  And I will see that I am applying for a new CDL
  And I will see my between 17.5 and 18 dob on that summary
  When I click to edit my CDL name
  Then I will be on the CDL name page
  When I change my first name
  And I click "Next" to continue
  Then I will be on the CDL summary
  When I click to edit my CDL date of birth
  Then I will be on the CDL dob page
  When I click "Next" to continue
  Then I will be on the CDL summary
