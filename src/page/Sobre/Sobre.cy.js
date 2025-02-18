import React from "react";
import Sobre from "./Sobre";

describe("Sobre", () => {
    it("render", () => {
        cy.mount(<Sobre />);
    });
});
