const { Given, Then } = require("cypress-cucumber-preprocessor/steps");
import {
    checkForConsoleErrors,
    spyOnConsoleVisit,
    testLinks,
} from "../../integration/utils/utils";

const htmlcssUrl = "/standards/webdesign/htmlcss";

Given("I visit the htmlcss page", () => {
    spyOnConsoleVisit(htmlcssUrl);
});

Then(
    "all link requests should respond with a {int} status",
    (statusCode: number) => {
        testLinks(statusCode);
    }
);

Then("there are no console errors", () => {
    checkForConsoleErrors(0);
});

Given("I request the htmlcss page", () => {
    cy.request({
        url:htmlcssUrl,
        failOnStatusCode:false
    }).as("htmlcssrequest");
});

Then(
    "the htmlcss page request has a status code of {int}",
    (statusCode: number) => {
        cy.get<Response>("@htmlcssrequest").then((response: Response) => {
            expect(response.status).to.equal(statusCode);
        });
    }
);
