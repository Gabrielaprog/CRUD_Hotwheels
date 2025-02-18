import * as React from "react";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

const AlertComp = ({ message }) => {
    return (
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
            {message}
        </Alert>
    );
};

export default AlertComp;
