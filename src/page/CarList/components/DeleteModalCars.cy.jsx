import React from "react";
import DeleteModalCars from "./DeleteModalCars";

describe("DeleteModalCars", () => {
    it("render", () => {
        cy.mount(
            <DeleteModalCars
                formEdit={{
                    id: 1,
                    name: "car",
                    brand: "marca",
                    color: "red",
                    year: "2024"
                }}
                openDelete={true}
                handleCloseDelete={false}
            />
        );
    });
});
