Feature: Sauce demo login test

Scenario: User login successfully and adds item to cart
    Given user is on sauce-demo page
    When user inputs username with "standard_user"
    And user inputs password with "secret_sauce"
    And user clicks button
    Then user should be redirect to homepage
    When user adds item to cart
    Then user should see the item in the cart