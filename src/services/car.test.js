import { api } from "../api/api";
import { carService } from "./car";
import { carDataMock } from "../helpers/mock/mockCar";

jest.mock("../api/api");

describe("Car Service", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe("findAll", () => {
        it("Deve retornar todos os registros com sucesso", async () => {
            // arrange
            api.get.mockResolvedValue({ data: carDataMock });

            // action
            const result = await carService.findAll();

            // assert
            expect(api.get).toHaveBeenCalledWith("/cars");
            expect(result).toEqual(carDataMock);
        });
    });

    describe("create", () => {
        it("Deve retornar todos os registros com sucesso", async () => {
            // arrange
            const payload = carDataMock[0];
            api.post.mockResolvedValue({ data: payload });

            // action
            const result = await carService.create(payload);

            // assert
            expect(api.post).toHaveBeenCalledWith("/cars", payload);
            expect(result).toEqual(payload);
        });
    });

    describe("update", () => {
        it("Deve retornar o carro atualizado", async () => {
            // arrange
            const payload = {
                id: 1,
                name: "Modelo Atualizado",
                brand: "Pálio",
                color: "Prata",
                year: "2024"
            };
            api.put.mockResolvedValue({ data: payload });

            // action
            const result = await carService.update(payload);

            // assert
            expect(api.put).toHaveBeenCalledWith("/cars", payload);
            expect(result).toEqual(payload);
        });
    });

    describe("delete", () => {
        it("Deve retornar todos os registros com sucesso", async () => {
            // arrange
            const mockId = 1;
            const response = { message: "Car removed successfully" };
            api.delete.mockResolvedValue({ data: response });

            // action
            const result = await carService.delete(mockId);

            // assert
            expect(api.delete).toHaveBeenCalledWith(`/cars/${mockId}`);
            expect(result).toEqual(response);
        });
    });
});
