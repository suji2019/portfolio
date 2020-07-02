/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@types/testing-library__cypress" />

describe("navigation", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("link to about works", () => {
    cy.get("nav").within(() => {
      cy.findByText(/about/i).click({ force: true }).waitForRouteChange();
    });
    cy.findByText(/Hi/i).assertRoute("/about");
  });
  it("link to home works", () => {
    cy.get("nav").within(() => {
      cy.findByText(/about/i).click({ force: true }).waitForRouteChange();
    });
    cy.findByText(/Hi/i).assertRoute("/about");
  });
});
