import { Fragment, useEffect, useState } from "react";
import { carDataFake } from "../../helpers/cars";
import { carService } from "../../services/car";

import { TableComp } from "./components";


const CarList = () => {
    // states
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    //hooks
    useEffect(() => {
        async function getData() {
            await carService
                .findAll()
                .then((response) => {
                    setData(response);
                })
                .catch((e) => console.log(e))
                .finally(() => {
                    setLoading(false);
                });
        }

        getData();
    }, [carDataFake]);

    // functions

    function renderList(index, key) {
        return (
            <Fragment key={key}>
                <ul>
                    <li>Nome do Carro: {index.inputNome}</li>
                    <li>Marca: {index.inputMarca}</li>
                    <li>Cor: {index.inputCor}</li>
                    <li>Ano: {index.inputAno}</li>
                </ul>
            </Fragment>
        );
    }

    if (loading) {
        return <>Carregando dados...</>;
    }

    return (
        <div>
            {/* {data.map(renderList)} */}
            <TableComp />
        </div>
    );
};

export default CarList;
