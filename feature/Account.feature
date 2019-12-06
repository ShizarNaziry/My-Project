Feature: Test creating Account
  I want to use this feature file to test creating account in our salesforce application

  
  Scenario: Creating Account
    Given I open chrome browser
    And I go to salesforce home page
    And I enter username
    And I enter password
    When I click the login button
    Then I see the dashboard
    And I create Account
      | Account Name | Account Number | Parent Account | Account Site | Type  | Industry | Annual Revenue | Rating | Phone        | Fax          | Website     | Ticker Symbol | Ownership | Employees | SIC Code | Billing Street | Billing City | Billing State/Province | Billing Zip/Postal Code | Billing Country | Customer Priority | Month    | Year | Day | Number of Locations | Active | SLA Serial Number | Description |
      | Costco       |           1212 | T-Mobile       |        23432 | Other | Retail   |          25000 | Warm   | 571-121-2434 | 123-234-1321 | www.a4va.com| $$%%^         | Private   |        12 | a34sdf   | 123 AB4C Street| Woodbridge4  | Virginiaa              |        223222           | USA             | High              | November | 2019 |  25 |                  12 | Yes    |             23432 | Hello World |
    And I ignore the error and save
    And I quit the browser
