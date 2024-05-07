Feature: Sauce demo test case

    @loginvalid 
    Scenario: User login successfully with valid credentials
        Given user is on sauce-demo page
        When user input username with "standard_user"
        And user input password with "secret_sauce"
        And user click button
        Then User on dashboard page
        
    @logininvalid
    Scenario: User login unsuccessfully with invalid credentials
        Given user is on sauce-demo page
        When user input username with "standard_user"
        And user input password with "IrvinHasiba"
        Then user see an error message
    
    @additem
    Scenario: user add item to cart and validate
        Given user is on sauce-demo page
        When user input username with "standard_user"
        And user input password with "secret_sauce"
        And user click button
        And user adds an item to the cart
        And user click cart button
        Then user is on cart page 

    @failedtest
    Scenario: user doesn't fill in the username and password
        Given user is on sauce-demo page
        When user input username with " "
        And user input password with " "
        And user click button 
        Then user should not be logged in