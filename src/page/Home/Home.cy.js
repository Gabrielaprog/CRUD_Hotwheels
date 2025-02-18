import React from "react";
import Home from "./Home";

describe("Home", () => {
    it("render", () => {
        cy.mount(<Home />);
    });
});
