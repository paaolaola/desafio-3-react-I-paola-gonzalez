import { useState } from "react";
import BaseColaboradores from "./BaseColaboradores";
import React from "react";
import Buscador from "./Buscador";
import Formulario from "./Formulario";

function Listado() {
    const [colaboradores, setColaboradores] = useState([...BaseColaboradores]);
    const [search, setSearch] = useState("");

    const deleteCol = (id) => {
        const updateCol = colaboradores.filter((colaborador) => colaborador.id !== id);
        setColaboradores(updateCol);
        setSearch("");
    };

    const searchHandle = (searchInput) => {
        const searchLowerCase = searchInput.toLowerCase();
        const filteredColaboradores = BaseColaboradores.filter((colaborador) => {
            return (
                colaborador.nombre.toLowerCase().includes(searchLowerCase) ||
                colaborador.correo.toLowerCase().includes(searchLowerCase) ||
                colaborador.edad.toLowerCase().includes(searchLowerCase) ||
                colaborador.cargo.toLowerCase().includes(searchLowerCase) ||
                colaborador.telefono.toLowerCase().includes(searchLowerCase)
            );
        });

        setColaboradores(filteredColaboradores);
        setSearch("");
    };

    const filterCol = colaboradores.filter((colaborador) => {
        const searchLowerCase = search.toLowerCase();
        return (
            colaborador.nombre.toLowerCase().includes(searchLowerCase) ||
            colaborador.correo.toLowerCase().includes(searchLowerCase) ||
            colaborador.edad.toLowerCase().includes(searchLowerCase) ||
            colaborador.cargo.toLowerCase().includes(searchLowerCase) ||
            colaborador.telefono.toLowerCase().includes(searchLowerCase)
        );
    });
    const addCol = (newCol) => {
        setColaboradores([...colaboradores, newCol]);
    };
    return (
        <div className="listadoContainer">
            <div className="containerSearch">
                <Buscador onSearch={searchHandle} />
            </div>

            <table className="table table-sm table-dark table-custom">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Edad</th>
                        <th>Cargo</th>
                        <th>Teléfono</th>
                    </tr>
                </thead>

                <tbody>
                    {filterCol.map((colaborador) => (
                        <tr key={colaborador.id}>
                            <td>{colaborador.nombre}</td>
                            <td>{colaborador.correo}</td>
                            <td>{colaborador.edad}</td>
                            <td>{colaborador.cargo}</td>
                            <td>{colaborador.telefono}</td>
                            <td>
                                <button className="btnDelete" onClick={() => deleteCol(colaborador.id)}>
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div>
                <Formulario onAddCol={addCol} />
            </div>
        </div>
    );
}

export default Listado;
