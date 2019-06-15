@Demo1
Feature: this is a demo feature file

  Scenario Outline: this is a demo scenario outline
    Given Call_With_Data "loginToMercuryTravels" on "com.glue.DemoClass"
      | User Name | <User_Name> |
      | Password  | <Password>  |
    And Call "clickOnCruises" on "com.glue.DemoClass"
    And "verifyNavigation" for "Cruise" on "com.glue.DemoClass"

    Examples: 
      | User_Name | Password |
      | anil      | anil     |
      #| naga      | naga     |
