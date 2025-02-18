import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import useCars from "../../../hook/useCars";

//import "../CarList.css"



//modal
import EditModalCars from "./EditModalCars";
import DeleteModalCars from "./DeleteModalCars";

const TableComp = () => {
    // states - hooks
    const [rows, setRows] = useState([]);
    const { findAllCars } = useCars();
    const [refresh, setRefresh] = useState(false);

    //editModal
    const [openEdit, setOpenEdit] = useState(false);
    const handleOpenEdit = () => setOpenEdit(true);
    const handleCloseEdit = () => setOpenEdit(false);

    //deleteModal
    const [openDelete, setOpenDelete] = useState(false);
    const handleOpenDelete = () => setOpenDelete(true);
    const handleCloseDelete = () => setOpenDelete(false);

    //message
    const [message, setMessage] = useState("");

    // dataToEdit
    const [formEdit, setFormEdit] = useState({});

    useEffect(() => {
        async function getData() {
            await findAllCars()
                .then((response) => setRows(response))
                .catch((e) => console.log(e))
                .finally(() => console.log("carregado"));
        }

        getData();
    }, [refresh]);

    console.log(formEdit);
    console.log(openEdit);

    return (
        <>
            <div className="container">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Brand</TableCell>
                                <TableCell align="right">Color</TableCell>
                                <TableCell align="right">Year</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0
                                        }
                                    }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.brand}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.color}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.year}
                                    </TableCell>
                                    <TableCell align="right">
                                        <button
                                            onClick={() => {
                                                setFormEdit(row);
                                                handleOpenEdit();
                                            }}
                                        >
                                            Edit
                                        </button>

                                     
                                        
                                        <button
                                            onClick={() => {
                                                setFormEdit(row);
                                                handleOpenDelete();
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <EditModalCars
                    openEdit={openEdit}
                    handleCloseEdit={handleCloseEdit}
                    formEdit={formEdit}
                    setMessage={setMessage}
                    setRefresh={setRefresh}
                    refresh={refresh}
                />

                <DeleteModalCars
                    openDelete={openDelete}
                    handleCloseDelete={handleCloseDelete}
                    formEdit={formEdit}
                    setMessage={setMessage}
                    setRefresh={setRefresh}
                    refresh={refresh}
                />
            </div>
        </>
    );
};

export default TableComp;
