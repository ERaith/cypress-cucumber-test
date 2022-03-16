@multimodal
Feature: Multimodal Page
  Scenario: Page is free of console errors
    Given I visit the multimodal page
    Then there are no console errors
  Scenario: Requested Page Status Code is 200
    Given I request the multimodal page
    Then the multimodal page request has a status code of 200
  Scenario: Links on Page are Valid
    Given I visit the multimodal page
    Then all link requests should respond with a 200 status
