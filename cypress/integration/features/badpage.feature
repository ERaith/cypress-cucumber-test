@badpage
Feature: Badpage Page
  Scenario: Page is free of console errors
    Given I visit the bad page
    Then there are no console errors
  Scenario: Requested Page Status Code is 404
    Given I request the bad page
    Then the bad page request has a status code of 404
  Scenario: Links on Page are Valid
    Given I visit the bad page
    Then all link requests should respond with a 200 status