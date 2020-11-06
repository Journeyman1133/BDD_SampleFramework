@web
  Feature: Messenger Page Feature

    Background:
      Given I am on Messenger Page

      @messenger
      Scenario: Verify invalid login from messenger page
        When I enter unalaby@gmail.com into username field on Messenger Page
        And I enter test123 into password field on Messenger Page
        And I click on login button on Messenger Page
        Then I verify invalid login message on sign in page