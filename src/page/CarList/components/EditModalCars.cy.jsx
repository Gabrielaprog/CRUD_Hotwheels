import React from "react";
import EditModalCars from "./EditModalCars";

describe("EditModalCars", () => {
    it("render", () => {
        cy.mount(
            <EditModalCars
                formEdit={{
                    id: 1,
                    name: "car",
                    brand: "marca",
                    color: "red",
                    year: "2024"
                }}
                openEdit={true}
                handleCloseEdit={false}
            />
        );
    });
});
