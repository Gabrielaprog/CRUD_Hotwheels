import React from "react";
import CarForm from "./CarForm";

describe("CarForm", () => {
    it("render", () => {
        cy.mount(<CarForm />);
    });

});