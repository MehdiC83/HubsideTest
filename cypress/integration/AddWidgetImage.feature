Feature: Add image to my website

    add widget image

    Scenario: logging in
        Given I navigate to home page
        When I click button connexion
        And I enter
            |email|
            |testhubside@mailo.xyz|
        And I click buton suivant
        And I pass
            |password|
            |Kissi93190|
        And I click on button me connecter
        Then I am logged in
    Scenario: add widget image
        Given I am in my site page
        When I click on button update site
        And I click on button add bloc
        And I click on button image
        And I click on image
        Then Image is loaded in site