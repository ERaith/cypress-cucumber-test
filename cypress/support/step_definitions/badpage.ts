const { Given, Then } = require("cypress-cucumber-preprocessor/steps");
import {
    checkForConsoleErrors,
    spyOnConsoleVisit,
    testLinks,
} from "../../integration/utils/utils";

const badPageUrl = "/standards/badpage";

Given("I visit the bad page", () => {
    spyOnConsoleVisit(badPageUrl);
});

Then(
    "all link requests should respond with a {int} status",
    (statusCode: number): void => {
        testLinks(statusCode);
    }
);

Then("there are no console errors", (): void => {
    checkForConsoleErrors(0);
});

Given("I request the bad page", (): void => {
    cy.request({
        url: badPageUrl,
        failOnStatusCode: false,
    }).as("badpagerequest");
});

Then(
    "the bad page request has a status code of {int}",
    (statusCode: number): void => {
        cy.get<Response>("@badpagerequest").then((response: Response) => {
            expect(response.status).to.equal(statusCode);
        });
    }
);
