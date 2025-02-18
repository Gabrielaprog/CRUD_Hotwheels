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

const DeleteModalCars = ({
    openDelete,
    handleCloseDelete,
    formEdit,
    setMessage,
    setRefresh,
    refresh
}) => {
    const { destroy } = useCars();

    const handleSubmit = async () => {
        await destroy(formEdit.id)
            .then(() => setMessage("Registro deletado com sucesso!"))
            .catch(() => setMessage("Erro na exclusão do registro"))
            .finally(() => {
                setRefresh(!refresh);
                handleCloseDelete();
            });
    };

    return (
        <Modal
            open={openDelete}
            onClose={handleCloseDelete}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Deseja deletar o carro {formEdit.name}?
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    
                </Typography>

                <Button
                    variant="contained"
                    color="error"
                    onClick={handleSubmit}
                >
                    Excluir
                </Button>

                <Button
                    variant="contained"
                    color="info"
                    onClick={handleCloseDelete}
                >
                    Voltar
                </Button>
            </Box>
        </Modal>
    );
};

export default DeleteModalCars;
