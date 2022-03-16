@htmlcss
Feature: HtmlCss Page
  Scenario: Page is free of console errors
    Given I visit the htmlcss page
    Then there are no console errors
  Scenario: Requested Page Status Code is 200
    Given I request the htmlcss page
    Then the htmlcss page request has a status code of 200
  Scenario: Links on Page are Valid
    Given I visit the htmlcss page
    Then all link requests should respond with a 200 status