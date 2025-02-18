import { carService } from "../services/car";

const useCars = () => {
    const create = (payload) => {
        try {
            const response = carService.create(payload);
            return response;
        } catch (e) {
            console.log(e);
        }
    };

    const findAllCars = () => {
        try {
            const response = carService.findAll();
            return response;
        } catch (e) {
            console.log(e);
        }
    };

    const update = (payload) => {
        try {
            const response = carService.update(payload);
            return response;
        } catch (e) {
            console.log(e);
        }
    };

    const destroy = (id) => {
        try {
            const response = carService.delete(id);
            return response;
        } catch (e) {
            console.log(e);
        }
    };

    return { findAllCars, create, update, destroy };
};

export default useCars;
