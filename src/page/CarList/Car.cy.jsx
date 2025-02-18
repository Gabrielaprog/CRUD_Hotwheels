import React from "react";
import CarList from "./CarList";

describe("CarList", () => {
    it("render", () => {
        cy.mount(<CarList />);
    });
});
