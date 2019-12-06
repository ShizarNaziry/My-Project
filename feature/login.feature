Feature: Test Salesforce login functionality
  I want to use this feature file to test the login functionality of our salesforce application

  Scenario: login using valid credentials
    Given I open chrome browser
    And I go to salesforce home page
    And I enter username
    And I enter password
    When I click the login button
    Then I see the dashboard
    And I quit the browser
	  
	  Scenario: login using invalid credintials
	  Given I open chrome browser
	  And I go to salesforce home page
	  And I enter ivalid username
	  And I enter invalid password
	  When I click the login button
	  Then I should not be able to login
	  And I quit the browser