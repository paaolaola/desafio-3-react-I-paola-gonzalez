import { useState } from "react";
import React from "react";
import Alert from "./Alert";

const Formulario = ({ onAddCol }) => {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [edad, setEdad] = useState("");
    const [cargo, setCargo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [alertColor, setAlertColor] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [formularioCompleto, setFormularioCompleto] = useState(false);

    const sendForm = (e) => {
        e.preventDefault();
        const newCol = {
            id: Date.now(),
            nombre,
            correo,
            edad,
            cargo,
            telefono,
        };

        onAddCol(newCol);

        if (!nombre || !correo || !edad || !cargo || !telefono) {
            setAlertMessage("Faltan campos por completar!");
            setAlertColor("danger");
        } else {
            setAlertMessage("Agregado exitosamente!");
            setAlertColor("success");
        }
    };

    return (
        <>
            <div className="containerForm">
                <h3>Lista de Colaboradores</h3>
                <form onSubmit={sendForm}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <input type="number" className="form-control" placeholder="Edad" value={edad} onChange={(e) => setEdad(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Cargo" value={cargo} onChange={(e) => setCargo(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <input type="number" className="form-control" placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Agregar
                    </button>
                </form>
                <Alert alertColor={alertColor} alertMessage={alertMessage} />
            </div>
        </>
    );
};

export default Formulario;
