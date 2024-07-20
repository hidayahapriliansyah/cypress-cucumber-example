Feature: Sign Up Page

  Scenario: Validate Sign Up Page
    Given I visit the "/signup" page
    Then I should see an "h1" tag containing "Sign Up"
    And I should see an input with id "email"
    And I should see an input with id "name"
    And I should see a button with type "submit" containing "Sign Up"
    
    When I enter "example@email" into the input with id "email"
    Then I should see a "small" tag with id "error-email"
    
    When I enter "Ad" into the input with id "name"
    Then I should see a "small" tag with id "error-name"
    
    When I clear the input with id "email"
    And I clear the input with id "name"
    
    When I enter "example@email.com" into the input with id "email"
    Then I should not see a "small" tag with id "error-email"
    
    When I enter "Adi Firmansyah" into the input with id "name"
    Then I should not see a "small" tag with id "error-name"
    
    When I click the "submit" button
    Then I should see a toast with className "success-signup-toast" after 3 seconds
