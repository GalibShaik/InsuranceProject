@Login
Feature: Login Functionality in Banking Application

  @Sanity
  Scenario Outline: Valid Login on the AUT
    Given User is on the Login Page of the Bank Application
    When User enters correct user name "<name>" and password "<password>"
    Then Verify that manager Id is displayed on the Home Page

    Examples: 
      | name       | password |
      | mngr285669 | mYpUnEz  |
      
   @Regression  
   Scenario Outline: Valid Login on the AUT
    Given User is on the Login Page of the Bank Application
    When User enters correct user name "<name>" and password "<password>"
    Then Verify that manager Id is displayed on the Home Page

    Examples: 
      | name       | password |
      | mngr285669 | mYpUnEz  |
    
    
   @Regression  
   Scenario Outline: Valid Login on the AUT
    Given User is on the Login Page of the Bank Application
    When User enters correct user name "<name>" and password "<password>"
    Then Verify that manager Id is displayed on the Home Page

    Examples: 
      | name       | password |
      | mngr285669 | mYpUnEz  |
  