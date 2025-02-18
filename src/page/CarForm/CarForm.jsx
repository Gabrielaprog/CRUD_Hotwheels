import { useState } from "react";
import { TextField, Button } from "@mui/material";
import "./styles.css";
import useCars from "../../hook/useCars";

import AlertComp from "../../components/alerts";

const CarForm = () => {
    const { create } = useCars();
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await create(form)
            .then(() => setMessage("Registro Salvo com sucesso!"))
            .catch(() => setMessage("Erro na criação do registro"))
            .finally(() => {
                resetForm();
                setTimeout(() => {
                    setMessage("");
                }, 3000);
            });
    };

    const [form, setForm] = useState({
        name: "",
        brand: "",
        color: "",
        year: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((event) => ({
            ...event,
            [name]: value
        }));
        console.log(form);
    };

    function resetForm() {
        setForm({
            name: "",
            brand: "",
            color: "",
            year: ""
        });
    }


    return (
        <div className="container"
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100vh",
                alignItems: "center",
                justifyContent: "center",
                

            }} 
        >
    
            <div className="form">
                <form onSubmit={handleSubmit} className="formStyle">
                    <div className="input">
                        <TextField
                            id="filled-basic"
                            label="Name"
                            name="name"
                            variant="filled"
                            type="text"
                            required={true}
                            placeholder="Type the name"
                            value={form.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input">
                        <TextField
                            id="filled-basic"
                            label="Brand"
                            variant="filled"
                            name="brand"
                            type="text"
                            required={true}
                            placeholder="type the brand"
                            value={form.brand}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input">
                        <TextField
                            id="filled-basic"
                            label="Color"
                            variant="filled"
                            type="text"
                            name="color"
                            required={true}
                            placeholder="type the color"
                            value={form.color}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input">
                        <TextField
                            id="filled-basic"
                            label="Year"
                            variant="filled"
                            name="year"
                            type="text"
                            required={true}
                            placeholder="type the year"
                            value={form.year}
                            onChange={handleChange}
                        />
                    </div>

                    <Button variant="contained" type="submit">
                        Register the car
                    </Button>
                </form>
                <div style={{ marginTop: "15px" }}>
                    {message !== "" && <AlertComp message={message} />}
                </div>
            </div>
        </div>
    );
};

export default CarForm;
