import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import useCars from "../../../hook/useCars";
import { useEffect, useState } from "react";

import { TextField, Button } from "@mui/material";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4
};

const EditModalCars = ({
    openEdit,
    handleCloseEdit,
    formEdit,
    setMessage,
    setRefresh,
    refresh
}) => {
    const { update } = useCars();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await update(form)
            .then(() => setMessage("Registro editado com sucesso!"))
            .catch(() => setMessage("Erro na criação do registro"))
            .finally(() => {
                setRefresh(!refresh);
                handleCloseEdit();
            });
    };

    const [form, setForm] = useState({
        id: "",
        name: "",
        brand: "",
        color: "",
        year: ""
    });

    useEffect(() => {
        setForm({
            id: formEdit.id,
            name: formEdit.name,
            brand: formEdit.brand,
            color: formEdit.color,
            year: formEdit.year
        });
    }, [formEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((event) => ({
            ...event,
            [name]: value
        }));
        console.log(form);
    };

    return (
        <Modal
            open={openEdit}
            onClose={handleCloseEdit}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Editar Carro X?
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    
                </Typography>

                <form onSubmit={handleSubmit} className="formStyle">
                    <div className="input">
                        <TextField
                            id="filled-basic"
                            label="Name"
                            value={form.name}
                            name="name"
                            variant="filled"
                            type="text"
                            required={true}
                            placeholder="Type the name"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input">
                        <TextField
                            id="filled-basic"
                            label="Brand"
                            value={form.brand}
                            variant="filled"
                            name="brand"
                            type="text"
                            required={true}
                            placeholder="type the brand"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input">
                        <TextField
                            id="filled-basic"
                            label="Color"
                            value={form.color}
                            variant="filled"
                            type="text"
                            name="color"
                            required={true}
                            placeholder="type the color"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input">
                        <TextField
                            id="filled-basic"
                            label="Year"
                            value={form.year}
                            variant="filled"
                            name="year"
                            type="text"
                            required={true}
                            placeholder="type the year"
                            onChange={handleChange}
                        />
                    </div>

                    <Button variant="contained" type="submit">
                        Editar o Registro
                    </Button>
                </form>
            </Box>
        </Modal>
    );
};

export default EditModalCars;
