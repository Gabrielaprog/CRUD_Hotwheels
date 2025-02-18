import { api } from "../api/api";

export const carService = {
    findAll: async () => {
        const response = await api.get("/cars");
        return response.data;
    },

    create: async (payload) => {
        const response = await api.post("/cars", payload);
        return response.data;
    },

    update: async (payload) => {
        const response = await api.put("/cars", payload);
        return response.data;
    },

    delete: async (id) => {
        const response = await api.delete(`/cars/${id}`);
        return response.data;
    }
};
