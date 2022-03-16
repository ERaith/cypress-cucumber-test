import { expect } from "chai";
const { Given, Then } = require("cypress-cucumber-preprocessor/steps");
import {
    checkForConsoleErrors,
    spyOnConsoleVisit,
    testLinks,
} from "../../integration/utils/utils";

const multimodalPageUrl = "/standards/webofdevices/multimodal";

Given("I visit the multimodal page", () => {
    cy.intercept(multimodalPageUrl).as("multimodalrequest");
    spyOnConsoleVisit(multimodalPageUrl);
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

Given("I request the multimodal page", () => {
    cy.request({
        url:multimodalPageUrl,
        failOnStatusCode:false
    }).as("multimodalrequest");
});

Then(
    "the multimodal page request has a status code of {int}",
    (statusCode: number) => {
        cy.get<Response>("@multimodalrequest").then((response: Response) => {
            expect(response.status).to.equal(statusCode);
        });
    }
);
