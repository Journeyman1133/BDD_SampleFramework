@loginPage

Feature: Login Feature

  Background:
    Given I am on Home Page

  @login
  Scenario Outline: Verify Invalid Login for Multiple Users

    When I enter <username> into username text fields on home screen
    And I enter <password> into password text fields on home screen
    And I click on login button on home screen
    Then I verify the invalid credentials

    Examples:

      |  username           | password  |
      |  unalaby@gmail.com  |  test123  |
      |  ammar@gmail.com    |  test456  |
      |  unal@gmail.com     |  123test  |